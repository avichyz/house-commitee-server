
'use strict';
module.exports = function (app) {
    var messagesManager = require('../controllers/messagesController');

    // routes
    app.route('/messages')
        .get(messagesManager.getAllMessages)
        .post(messagesManager.saveMessage);

    app.route('/messages/:messageId')
        .get(messagesManager.getMessage)
        .put(messagesManager.updateMessage)
        .delete(messagesManager.deleteMessage)
}