'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    name: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
      },
    phoneNumber1: {
        type: String
    },
    phoneNumber2: {
        type: String
    },
    city: {
        type: String
    },
    houseNumber: {
        type: Number
    },
    appartmentNumber: {
        type: Number
    },
    info: {
        type: String
    }
});

module.exports = mongoose.model('Users', UsersSchema);