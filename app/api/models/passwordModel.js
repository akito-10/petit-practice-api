const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PasswordSchema = new Schema({
  adminPassword: {
    type: String,
    required: false,
  },
  authPassword: {
    type: String,
    required: true,
  },
  createAt: {
    default: Date.now,
    type: Date,
  },
  updateAt: {
    default: Date.now,
    type: Date,
  },
});

module.exports = mongoose.model("passwords", PasswordSchema);
