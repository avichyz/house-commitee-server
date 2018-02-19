// grab express
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8081,
  mongoose = require('mongoose'),
  Furniture = require('./models/furnitureModel'), //created model loading here
  User = require('./models/userModel'), //created model loading here
  Order = require('./models/orderModel'), //created model loading here
  bodyParser = require('body-parser');

// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://admin:221189@ds117858.mlab.com:17858/ron_furnitures'); 

// catch random errors
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing route
require('./routes/furnituresRoutes')(app); 
require('./routes/usersRoutes')(app); 
require('./routes/ordersRoutes')(app); 


app.listen(port);

// catch bad requests
app.use(function(req, res) {
  res.status(404).send({path: req.originalUrl + ' not found'})
});

// send a message
console.log('Server  has started on port: ' + port);

