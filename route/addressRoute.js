const addressRoute = require("express").Router({ caseSensitive: true });

const {
  addressPostController,
  addressGetController,
  addressPutController,
} = require("../controller/addressController");

addressRoute.post("/", addressPostController);
addressRoute.get("/:email", addressGetController);
addressRoute.put("/:id", addressPutController);

module.exports = addressRoute;
