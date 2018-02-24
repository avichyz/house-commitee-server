'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppartmentsSchema = new Schema({
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
  residents: [{
    type: Schema.Types.ObjectId,
    ref: 'Resident'
  }]
});

AppartmentsSchema.index({ '$**': 'text' });

module.exports = mongoose.model('Appartments', AppartmentsSchema);