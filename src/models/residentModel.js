'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResidentsSchema = new Schema({
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
    houseNumber: {
        type: Number
    },
    appartmentNumber: {
        type: Number
    },
    isOwner: {
        type: Boolean
    },
    info: {
        type: String
    }
});

module.exports = mongoose.model('Residents', ResidentsSchema);