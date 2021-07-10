const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  eventDate: String,
  practicePlace: String,
  courtNumList: [Number],
  meetTime: String,
  createAt: {
    default: Date.now,
    type: Date,
  },
  updateAt: {
    default: Date.now,
    type: Date,
  },
});

module.exports = mongoose.model("events", EventSchema);
