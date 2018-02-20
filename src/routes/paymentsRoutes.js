// import { request } from "http";

'use strict';
module.exports = function (app) {
    var payments = require('../controllers/paymentsController');

    // routes
    app.route('/payments')
        .get(payments.getAllPayments)
        .post(payments.savePayment);

    app.route('/payments/:paymentId')
        .get(payments.getPayment)
        .put(payments.updatePayment)
        .delete(payments.deletePayment)
}