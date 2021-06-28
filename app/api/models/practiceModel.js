const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PracticeSchema = new Schema({
  isCancel: Boolean,
  createAt: {
    default: Date.now,
    type: Date,
  },
  updateAt: {
    default: Date.now,
    type: Date,
  },
});

module.exports = mongoose.model("practices", PracticeSchema);
