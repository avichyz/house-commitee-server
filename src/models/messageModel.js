'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessagesSchema = new Schema({
    resident: {
        type: Schema.Types.ObjectId,
        ref: 'Resident'
    },
    from: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    header: {
        type: String
    },
    content: {
        type: String
    }
});


// allow search on all string variables
MessagesSchema.index({ '$**': 'text' });

module.exports = mongoose.model('Messages', MessagesSchema);