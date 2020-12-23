'use strict'

const mongoose = require('mongoose');

const app = require('./app');

const port = process.env.PORT || 3977;


mongoose.connect('mongodb://localhost:27017/notis',
{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false },
(err, res) => {
  if(err){
    throw err;
  } else {
    console.log('The notis\'s BBDD conection is working successfully');

    app.listen(port, function() {
      console.log('API REST server is listening');
    })

  }
});