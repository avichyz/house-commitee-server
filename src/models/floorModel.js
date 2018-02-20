'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FloorsSchema = new Schema({
  number: {
    type: String
  },
  info: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  },
  appartments: [{
    type: Schema.Types.ObjectId, ref: 'Appartment'
  }]
});

module.exports = mongoose.model('Floors', FloorsSchema);