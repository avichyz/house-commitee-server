'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ResidentsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    updatedDate: {
        type: Date,
        default: Date.now
    },
    phoneNumber1: {
        type: String
    },
    phoneNumber2: {
        type: String
    },
    appartment: {
        type: Schema.Types.ObjectId,
        ref: 'Appartment'
    },
    isOwner: {
        type: Boolean,
        default: false
    },
    info: {
        type: String
    }
});

module.exports = mongoose.model('Residents', ResidentsSchema);