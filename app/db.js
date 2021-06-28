const mongoose = require("mongoose", { debug: true });
require("dotenv").config();
const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err.message);

    process.exit(1);
  }
};

module.exports = connectDB;
