var mongoose = require('mongoose'),
    OrdersSchema = mongoose.model('Orders');

exports.getAllOrders = function (req, res) {
    OrdersSchema.find({}, function (err, order) {
            if (err) res.send(err);
            res.json(order);
        });
};
exports.saveOrder = function (req, res) {
    var newOrder = new OrdersSchema(req.body);
    newOrder.save(
        function (err, order) {
            if (err) res.send(err);
            res.json(order);
        });
};
exports.getOrder = function (req, res) {
    OrdersSchema.findById(req.params.orderId,
        function (err, order) {
            if (err) res.send(err);
            res.json(order);
        });
};

exports.updateOrder = function (req, res) {
    OrdersSchema.findOneAndUpdate({ _id: req.params.orderId }, req.body, { new: true },
        function (err, order) {
            if (err) res.send(err);
            res.json(order);
        });
    ;
}
exports.deleteOrder = function (req, res) {
    OrdersSchema.remove({
        _id: req.params.orderId},
        function (err, order) {
            if (err) res.send(err);
            res.json({ message: 'Order was succefully deleted' });
        });
};

