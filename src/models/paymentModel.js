'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaymentsSchema = new Schema({
    name: {
        type: String
    },
    info: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
      },
    height: {
        type: Number
    },
    width: {
        type: Number
    },
    depth: {
        type: Number
    },
    invantoryStatus: {
        type: [{
                type: String,
                enum: ['unavailable', 'in stock', 'not in stock']
            }],
    default: ['not in stock']
    }
});

module.exports = mongoose.model('Payments', PaymentsSchema);