
'use strict';
module.exports = function(app) {
    var floorsManager = require('../controllers/floorsController');

    // routes
    app.route('/floors')
    .get(floorsManager.getAllFloors)
    .post(floorsManager.saveFloor);

    app.route('/floors/:floorId')
    .get(floorsManager.getFloor)
    .put(floorsManager.updateFloor)
    .delete(floorsManager.deleteFloor)
}