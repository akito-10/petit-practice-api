const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const Practice = require("./api/models/practiceModel");
const mongoose = require("mongoose");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  if ("OPTIONS" === req.method) {
    res.send(200);
  } else {
    next();
  }
});

mongoose.Promise = global.Promise;
const connectDB = require("./db");
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./api/routers/practiceRouter");
routes(app);

app.listen(PORT, () => {
  console.log(`Post app listening on port ${PORT}`);
});
