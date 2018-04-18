'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ResidentsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    residentId: {
        type: Number,
        required: false
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

ResidentsSchema.index({ '$**': 'text' });

module.exports = mongoose.model('Residents', ResidentsSchema);