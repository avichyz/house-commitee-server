var compression = require('compression');
var helmet = require('helmet');

// grab express
const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const mongoose = require('mongoose');
const Payment = require('./models/paymentModel'); //created model loading here
const appartment = require('./models/appartmentModel'); //created model loading here
const Resident = require('./models/residentModel'); //created model loading here
const Message = require('./models/messageModel'); //created model loading here
const Floor = require('./models/floorModel'); //created model loading here
const bodyParser = require('body-parser');

app.use(helmet());
app.use(compression()); //Compress all routes

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

