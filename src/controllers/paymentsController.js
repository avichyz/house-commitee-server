var mongoose = require('mongoose'),
    PaymentsSchema = mongoose.model('Payments');

// Equivalent to: 
//const getAllPayments = ..
//exports.getAllPayments=getAllPayments;
exports.getAllPayments = function (req, res) {
    PaymentsSchema.find({}, function (err, payment) {
        if (err) res.send(err);
        res.json(payment);
    });
};
exports.savePayment = function (req, res) {
    var newPayment = new PaymentsSchema(req.body);
    newPayment.save(
        function (err, payment) {
            if (err) res.send(err);
            res.json(payment);
        });
};
exports.getPayment = function (req, res) {
    PaymentsSchema.findById(req.params.paymentId,
        function (err, payment) {
            if (err) res.send(err);
            res.json(payment);
        });
};

exports.updatePayment = function (req, res) {
    PaymentsSchema.findOneAndUpdate({ _id: req.params.paymentId }, req.body, { new: true },
        function (err, payment) {
            if (err) res.send(err);
            res.json(payment);
        });
    ;
}
exports.deletePayment = function (req, res) {
    PaymentsSchema.remove({
        _id: req.params.paymentId
    },
        function (err, payment) {
            if (err) res.send(err);
            res.json({ message: 'Payment was succefully deleted' });
        });
};

