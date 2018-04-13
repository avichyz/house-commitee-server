// grab express
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8081,
  mongoose = require('mongoose'),
  Payment = require('./models/paymentModel'), //created model loading here
  appartment = require('./models/appartmentModel'), //created model loading here
  Resident = require('./models/residentModel'), //created model loading here
  Message = require('./models/messageModel'), //created model loading here
  Floor = require('./models/floorModel'), //created model loading here
  bodyParser = require('body-parser');

// Compression - for fast responses // 
var compression = require('compression');
app.use(compression()); //Compress all routes

// Helmet - server protection against threats
var helmet = require('helmet');
app.use(helmet());

// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://admin:221189@ds143388.mlab.com:43388/house_commitee_lachis')

// catch random errors
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing route
require('./routes/paymentsRoutes')(app);
require('./routes/appartmentsRoutes')(app);
require('./routes/messagesRoutes')(app);
require('./routes/residentsRoutes')(app);
require('./routes/floorsRoutes')(app);

app.listen(port);

// catch bad requests
app.use(function (req, res) {
  res.status(404).send({ path: req.originalUrl + ' not found' })
});

// send a message
console.log('Server  has started on port: ' + port);

