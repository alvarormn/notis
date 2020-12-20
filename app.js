'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//load routes
const task_routes = require('./routes/task');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Headers HTTP
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIOS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIOS, PUT, DELETE');
  
    next();
  });

//routes
app.use('/api/task', task_routes);


module.exports = app;