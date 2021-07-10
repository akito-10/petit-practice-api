const mongoose = require("mongoose");
const Event = mongoose.model("events");

exports.fetch_event = async (req, res) => {
  await Event.find({}, (err, event) => {
    if (err) res.send(err);

    res.json(event);
  });
};

exports.create_event = (req, res) => {
  const new_event = new Event(req.body);
  new_event.save((err, event) => {
    if (err) res.send(err);
    res.json(event);
  });
};

exports.update_event = (req, res) => {
  Event.findByIdAndUpdate(
    { _id: req.params.eventId },
    req.body,
    { new: true },
    (err, event) => {
      if (err) res.send(err);
      res.json(event);
    }
  );
};
