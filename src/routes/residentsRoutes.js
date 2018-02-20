
'use strict';
module.exports = function (app) {
    var residentsManager = require('../controllers/residentsController');

    // routes
    app.route('/residents')
        .get(residentsManager.getAllResidents)
        .post(residentsManager.saveResident);

    app.route('/residents/:residentId')
        .get(residentsManager.getResident)
        .put(residentsManager.updateResident)
        .delete(residentsManager.deleteResident)
}