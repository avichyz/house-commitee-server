var mongoose = require('mongoose'),
    FurnituresSchema = mongoose.model('Furnitures');

// Equivalent to: 
//const getAllFurnitures = ..
//exports.getAllFurnitures=getAllFurnitures;
exports.getAllFurnitures = function (req, res) {
    FurnituresSchema.find({}, function (err, furniture) {
            if (err) res.send(err);
            res.json(furniture);
        });
};
exports.saveFurniture = function (req, res) {
    var newFurniture = new FurnituresSchema(req.body);
    newFurniture.save(
        function (err, furniture) {
            if (err) res.send(err);
            res.json(furniture);
        });
};
exports.getFurniture = function (req, res) {
    FurnituresSchema.findById(req.params.furnitureId,
        function (err, furniture) {
            if (err) res.send(err);
            res.json(furniture);
        });
};

exports.updateFurniture = function (req, res) {
    FurnituresSchema.findOneAndUpdate({ _id: req.params.furnitureId }, req.body, { new: true },
        function (err, furniture) {
            if (err) res.send(err);
            res.json(furniture);
        });
    ;
}
exports.deleteFurniture = function (req, res) {
    FurnituresSchema.remove({
        _id: req.params.furnitureId},
        function (err, furniture) {
            if (err) res.send(err);
            res.json({ message: 'Furniture was succefully deleted' });
        });
};

