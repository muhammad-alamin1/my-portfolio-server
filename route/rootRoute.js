const { rootController } = require("../controller/rootController");

const rootRoute = require("express").Router({ caseSensitive: true });

rootRoute.get("/", rootController);

module.exports = rootRoute;
