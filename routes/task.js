'use strict'

const express = require('express');
const multipart = require('connect-multiparty');

const TaskController = require('../controllers/task');
//const md_auth = require('../middlewares/authenticate');

const api = express.Router();

api.post('/new', TaskController.setTask);
api.get('/list', TaskController.getTasks);
api.get('/:id', TaskController.getTask);
api.put('/update/:id', TaskController.updateTask);
api.delete('/delete/:id', TaskController.deleteTask);

module.exports = api;