const cors = require("cors");
const bodyParser = require("body-parser");

const applicationMiddleware = [
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
];

module.exports = applicationMiddleware;
