
'use strict';
module.exports = function(app) {
    var ordersManager = require('../controllers/ordersController');

    // routes
    app.route('/orders')
    .get(ordersManager.getAllOrders)
    .post(ordersManager.saveOrder);

    app.route('/orders/:orderId')
    .get(ordersManager.getOrder)
    .put(ordersManager.updateOrder)
    .delete(ordersManager.deleteOrder)
}