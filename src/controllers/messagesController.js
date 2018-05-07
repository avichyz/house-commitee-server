
let CircularJSON = require('circular-json-es6');
let mongoose = require('mongoose');
var assert = require('assert');
let MessagesSchema = mongoose.model('Messages');

exports.getAllMessages = function (req, res) {
     MessagesSchema.find({}, function (err, message) {
        if (err) res.send(err);
         res.json(message);
     });
 };

exports.findMessages = function (req, res) {
    return MessagesSchema.find({ $text: { $search: req.params.searchString} },
        function (err, message) {
        console.log(req.params.name);
            if (err) res.send(err);
        // let data = CircularJSON.stringify(message);
        res.json(message)
    })
}


exports.saveMessage = function (req, res) {
    let newMessage = new MessagesSchema(req.body);
    newMessage.save(
        function (err, message) {
            if (err) {
                assert.equal(err.errors['name'].message,
                    'Path `name` is required.');
                res.send(err);
            }
            res.json(message);
        });
};


exports.getMessage = function (req, res) {
    MessagesSchema.findById(req.params.messageId,
        function (err, message) {
            if (err) res.send(err);
            res.json(message);
        });
};

exports.updateMessage = function (req, res) {
    MessagesSchema.findOneAndUpdate({ _id: req.params.messageId }, req.body, { new: true },
        function (err, message) {
            if (err) res.send(err);
            res.json(message);
        });
    ;
}
exports.deleteMessage = function (req, res) {
    MessagesSchema.remove({
        _id: req.params.messageId
    },
        function (err, message) {
            if (err) res.send(err);
            res.json({ message: 'Message was succefully deleted' });
        });
};

