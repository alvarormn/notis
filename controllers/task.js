'use strict'

const bcrypt = require('bcrypt-nodejs');
const Task = require('../models/task');
//const jwt = require('../services/jwt')
const fs = require('fs');
const path = require('path');
const { userInfo } = require('os');

function setTask(req,res){
    let task = new Task();
    const params = req.body;

    task.title = params.title;
    task.body = params.body;
    task.check = params.check;

    if(task.title != null || task.check != null){
        task.save((err,taskStored) => {
            if (err) {
                res.status(500).send({
                    message: `Error to save: ${err}`
                });
            } else if(!taskStored) {
                res.status(404).send({
                    message: 'Not saved'
                })
            } else {
                res.status(200).send({
                    task: taskStored
                })
            }
        })
    }
};

function getTasks(req,res){
    Task.find((err, taskList) => {
        if (err) {
            res.status(500).send({
                message: `Error: ${err}`
            });
        } else if(!taskList) {
            res.status(404).send({
                message: 'Not finded'
            })
        } else {
            res.status(200).send({
                list: taskList
            })
        }
    })
}

function getTask(req,res){
    const taskId = req.params.id;

    Task.findById(taskId,(err,task) => {
        if (err) {
            res.status(500).send({
                message: `Error: ${err}`
            });
        } else if(!task) {
            res.status(404).send({
                message: 'Not finded'
            })
        } else {
            res.status(200).send({
                task: task
            })
        }
    })
}

function updateTask(req,res){
    const taskId = req.params.id;
    let update = req.body;

    Task.findByIdAndUpdate(taskId, update, (err, taskUpdated) => {
        if (err) {
            res.status(500).send({
                message: `Error: ${err}`
            });
        } else if(!taskUpdated) {
            res.status(404).send({
                message: 'Not finded'
            })
        } else {
            res.status(200).send({
                task: taskUpdated
            })
        }
    })
}

function deleteTask(req,res){
    const taskId = req.params.id;

    Task.findByIdAndRemove(taskId,(err, taskDeleted) => {
        if (err) {
            res.status(500).send({
                message: `Error: ${err}`
            });
        } else if(!taskDeleted) {
            res.status(404).send({
                message: 'Not deleted'
            })
        } else {
            res.status(200).send({
                message: 'Task already deleted',
                task: taskDeleted
            })
        }
    })

}

module.exports = {
    setTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}