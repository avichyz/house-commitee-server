// import { request } from "http";

'use strict';
module.exports = function(app) {
    var furnitures = require('../controllers/furnituresController');

    // routes
    app.route('/furnitures')
    .get(furnitures.getAllFurnitures)
    .post(furnitures.saveFurniture);

    app.route('/furnitures/:furnitureId')
    .get(furnitures.getFurniture)
    .put(furnitures.updateFurniture)
    .delete(furnitures.deleteFurniture)
}