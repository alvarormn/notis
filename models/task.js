'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = Schema({
  title: String,
  body: String,
  check: Boolean
});

module.exports = mongoose.model('Task', TaskSchema);