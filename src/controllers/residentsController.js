var mongoose = require('mongoose'),
    ResidentsSchema = mongoose.model('Residents');
exports.getAllResidents = function (req, res) {
    ResidentsSchema.find({}, function (err, resident) {
        if (err) res.send(err);
        res.json(resident);
    });
};
exports.saveResident = function (req, res) {
    var newResident = new ResidentsSchema(req.body);
    newResident.save(
        function (err, resident) {
            if (err) res.send(err);
            res.json(resident);
        });
};
exports.getResident = function (req, res) {
    ResidentsSchema.findById(req.params.residentId,
        function (err, resident) {
            if (err) res.send(err);
            res.json(resident);
        });
};

exports.updateResident = function (req, res) {
    ResidentsSchema.findOneAndUpdate({ _id: req.params.residentId }, req.body, { new: true },
        function (err, resident) {
            if (err) res.send(err);
            res.json(resident);
        });
    ;
}
exports.deleteResident = function (req, res) {
    ResidentsSchema.remove({
        _id: req.params.residentId
    },
        function (err, resident) {
            if (err) res.send(err);
            res.json({ message: 'Resident was succefully deleted' });
        });
};

