const mongoose = require("mongoose");
const Practice = mongoose.model("practices");

exports.fetch_practice = async (req, res) => {
  await Practice.find({}, (err, practice) => {
    if (err) res.send(err);
    res.json(practice);
  });
};

exports.create_practice = (req, res) => {
  const new_practice = new Practice(req.body);
  new_practice.save((err, practice) => {
    if (err) res.send(err);
    res.json(practice);
  });
};

exports.set_isCancel = (req, res) => {
  Practice.findByIdAndUpdate(
    { _id: req.params.practiceId },
    req.body,
    { new: true },
    (err, practice) => {
      if (err) res.send(err);
      res.json(practice);
    }
  );
};
