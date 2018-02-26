
'use strict';
module.exports = function (app) {
    var appartmentsManager = require('../controllers/appartmentsController');

    // routes
    app.route('/appartments')
        .get(appartmentsManager.getAllAppartments)
        .post(appartmentsManager.saveAppartment);

    app.route('/appartments/:appartmentId')
        .get(appartmentsManager.getAppartment)
        .put(appartmentsManager.updateAppartment)
        .delete(appartmentsManager.deleteAppartment)
}