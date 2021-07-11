const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const Practice = require("./api/models/practiceModel");
const Event = require("./api/models/eventModel");
const Password = require("./api/models/passwordModel");
const mongoose = require("mongoose");
const cors = require("cors");

const corsOption = {
  origin: [
    "http://127.0.0.1:5501",
    "http://127.0.0.1:5502",
    "https://petit-practice-77e76.web.app",
  ],
  credentials: true,
};
app.use(cors(corsOption));

mongoose.Promise = global.Promise;
const connectDB = require("./db");
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const practiceRoutes = require("./api/routers/practiceRouter");
practiceRoutes(app);

const eventRoutes = require("./api/routers/eventRouter");
eventRoutes(app);

const passwordRoutes = require("./api/routers/passwordRouters");
passwordRoutes(app);

app.listen(PORT, () => {
  console.log(`Post app listening on port ${PORT}`);
});
