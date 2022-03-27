require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// import route & middleware
const rootRoute = require("./route/rootRoute");
const messageRoute = require("./route/messageRoute");
const applicationMiddleware = require("./middleware/applicationMiddleware");
const addressRoute = require("./route/addressRoute");

const app = express();

// use middleware
app.use(applicationMiddleware);

// use routes
app.use("/", rootRoute);
app.use("/message", messageRoute);
app.use("/address", addressRoute);

// DB uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jdxha.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

// database connect with mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connected successfully");
  // port
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
  });
});
