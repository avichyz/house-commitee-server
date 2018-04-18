
let CircularJSON = require('circular-json-es6');
let mongoose = require('mongoose');
let ResidentsSchema = mongoose.model('Residents');

exports.getAllResidents = function (req, res) {
     ResidentsSchema.find({}, function (err, resident) {
        if (err) res.send(err);
         res.json(resident);
     });
 };

exports.findResidents = function (req, res) {
    return ResidentsSchema
        .find({ $text: { $search: `*/${req.params.searchString}/i` } },
    // .find({ "name": `/${req.params.searchString}/i` },
    // .find({ $text: { $search: req.params.searchString} },
        function (err, resident) {
            console.log(req.params.searchString);
            if (err) res.send(err);
        // let data = CircularJSON.stringify(resident);
        res.json(resident)
    })
}


exports.saveResident = function (req, res) {
    let newResident = new ResidentsSchema(req.body);
    newResident.save(
        function (err, resident) {
            if (err) {
                assert.equal(error.errors['name'].message,
                    'Path `name` is required.');
                res.send(err);
            }
            res.json(resident);
        });
};


exports.getResident = function (req, res) {
    ResidentsSchema.findById(req.params.id,
        function (err, resident) {
            if (err) res.send(err);
            res.json(resident);
        });
};

exports.updateResident = function (req, res) {
    ResidentsSchema.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true },
        function (err, resident) {
            if (err) res.send(err);
            res.json(resident);
        });
    ;
}

exports.deleteResident = function (req, res) {
    ResidentsSchema.remove({
        _id: req.params.id
    },
    function (err, resident) {
        if (err) res.send(err);
        res.json({ message: 'Resident was succefully deleted' });
    });
};

exports.deleteResidentByResidentId = function (req, res) {
    ResidentsSchema.remove({
        residentId: req.params.residentId
    },
        function (err, resident) {
            if (err) res.send(err);
            res.json({ message: 'Resident was succefully deleted' });
        });
};


exports.getResidentByResidentId = function (req, res) {
    var query = { 'residentId': req.params.residentId };
    ResidentsSchema.findOne(query, req.body, { new: true },
        function (err, resident) {
            if (err) res.send(err);
            res.json(resident);
        });
    ;
};

exports.updateResidentByResidentId = function (req, res) {
    var query = { 'residentId': req.params.residentId };
    ResidentsSchema.findOneAndUpdate(query, req.body, { new: true },
        function (err, resident) {
            if (err) res.send(err);
            res.json(resident);
        });
    ;
}
