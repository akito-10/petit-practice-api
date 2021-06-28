const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const Practice = require("./api/models/practiceModel");
const mongoose = require("mongoose");

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
