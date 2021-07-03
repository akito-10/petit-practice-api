const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const Practice = require("./api/models/practiceModel");
const mongoose = require("mongoose");
const cors = require("cors");

const corsOption = {
  origin: ["http://127.0.0.1:5501", "http://127.0.0.1:5502"],
  credentials: true,
};
app.use(cors(corsOption));

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
