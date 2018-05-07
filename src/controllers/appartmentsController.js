
let CircularJSON = require('circular-json-es6');
let mongoose = require('mongoose');
var assert = require('assert');
let AppartmentsSchema = mongoose.model('Appartments');

exports.getAllAppartments = function (req, res) {
     AppartmentsSchema.find({}, function (err, appartment) {
        if (err) res.send(err);
         res.json(appartment);
     });
 };

exports.findAppartments = function (req, res) {
    return AppartmentsSchema.find({ $text: { $search: req.params.searchString} },
        function (err, appartment) {
        console.log(req.params.name);
            if (err) res.send(err);
        // let data = CircularJSON.stringify(appartment);
        res.json(appartment)
    })
}


exports.saveAppartment = function (req, res) {
    let newAppartment = new AppartmentsSchema(req.body);
    newAppartment.save(
        function (err, appartment) {
            if (err) {
                assert.equal(err.errors['name'].message,
                    'Path `name` is required.');
                res.send(err);
            }
            res.json(appartment);
        });
};


exports.getAppartment = function (req, res) {
    AppartmentsSchema.findById(req.params.appartmentId,
        function (err, appartment) {
            if (err) res.send(err);
            res.json(appartment);
        });
};

exports.updateAppartment = function (req, res) {
    AppartmentsSchema.findOneAndUpdate({ _id: req.params.appartmentId }, req.body, { new: true },
        function (err, appartment) {
            if (err) res.send(err);
            res.json(appartment);
        });
    ;
}
exports.deleteAppartment = function (req, res) {
    AppartmentsSchema.remove({
        _id: req.params.appartmentId
    },
        function (err, appartment) {
            if (err) res.send(err);
            res.json({ message: 'Appartment was succefully deleted' });
        });
};

