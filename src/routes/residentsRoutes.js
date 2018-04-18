
'use strict';
module.exports = function (app) {
    var residentsManager = require('../controllers/residentsController');

    // routes
    app.route('/residents')
        .get(residentsManager.getAllResidents)
        .post(residentsManager.saveResident);

    // by item id
    app.route('/residents/:id')
        .get(residentsManager.getResident)
        .put(residentsManager.updateResident)
        .delete(residentsManager.deleteResident)
    
    // by residentId
    app.route('/residents/rId/:residentId')
    .put(residentsManager.updateResidentByResidentId)
    .get(residentsManager.getResidentByResidentId)
    .delete(residentsManager.deleteResident)

}