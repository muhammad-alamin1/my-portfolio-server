const { messagePostController } = require("../controller/messageController");

const messageRoute = require("express").Router({ caseSensitive: true });

messageRoute.post("/", messagePostController);

module.exports = messageRoute;
