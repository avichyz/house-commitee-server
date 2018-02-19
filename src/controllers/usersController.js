var mongoose = require('mongoose'),
UsersSchema = mongoose.model('Users');
exports.getAllUsers = function (req, res) {
    UsersSchema.find({}, function (err, user) {
            if (err) res.send(err);
            res.json(user);
        });
};
exports.saveUser = function (req, res) {
    var newUser = new UsersSchema(req.body);
    newUser.save(
        function (err, user) {
            if (err) res.send(err);
            res.json(user);
        });
};
exports.getUser = function (req, res) {
    UsersSchema.findById(req.params.userId,
        function (err, user) {
            if (err) res.send(err);
            res.json(user);
        });
};

exports.updateUser = function (req, res) {
    UsersSchema.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true },
        function (err, user) {
            if (err) res.send(err);
            res.json(user);
        });
    ;
}
exports.deleteUser = function (req, res) {
    UsersSchema.remove({
        _id: req.params.userId},
        function (err, user) {
            if (err) res.send(err);
            res.json({ message: 'User was succefully deleted' });
        });
};

