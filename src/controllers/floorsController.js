var mongoose = require('mongoose'),
    FloorsSchema = mongoose.model('Floors');

exports.getAllFloors = function (req, res) {
    FloorsSchema.find({}, function (err, floor) {
        if (err) res.send(err);
        res.json(floor);
    });
};
exports.saveFloor = function (req, res) {
    var newFloor = new FloorsSchema(req.body);
    newFloor.save(
        function (err, floor) {
            if (err) res.send(err);
            res.json(floor);
        });
};
exports.getFloor = function (req, res) {
    FloorsSchema.findById(req.params.floorId,
        function (err, floor) {
            if (err) res.send(err);
            res.json(floor);
        });
};

exports.updateFloor = function (req, res) {
    FloorsSchema.findOneAndUpdate({ _id: req.params.floorId }, req.body, { new: true },
        function (err, floor) {
            if (err) res.send(err);
            res.json(floor);
        });
    ;
}
exports.deleteFloor = function (req, res) {
    FloorsSchema.remove({
        _id: req.params.floorId
    },
        function (err, floor) {
            if (err) res.send(err);
            res.json({ message: 'Floor was succefully deleted' });
        });
};

