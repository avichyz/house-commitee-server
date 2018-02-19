
'use strict';
module.exports = function(app) {
    var usersManager = require('../controllers/usersController');

    // routes
    app.route('/users')
    .get(usersManager.getAllUsers)
    .post(usersManager.saveUser);

    app.route('/users/:userId')
    .get(usersManager.getUser)
    .put(usersManager.updateUser)
    .delete(usersManager.deleteUser)
}