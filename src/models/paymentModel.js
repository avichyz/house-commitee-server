'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaymentsSchema = new Schema({
    resident: {
        type: Schema.Types.ObjectId,
        ref: 'Resident'
    },
    year: {
        type: Number
    },
    month: {
        type: Number
    },
    updatedDate: {
        type: Date,
        default: Date.now
    },
    info: {
        type: String
    }
});

module.exports = mongoose.model('Payments', PaymentsSchema);