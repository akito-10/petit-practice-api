const mongoose = require("mongoose");
const Password = mongoose.model("passwords");

exports.fetch_password = async (req, res) => {
  await Password.find({}, (err, password) => {
    if (err) res.send(err);
    res.json(password);
  });
};

exports.create_password = (req, res) => {
  const new_password = new Password(req.body);
  new_password.save((err, password) => {
    if (err) res.send(err);
    res.json(password);
  });
};

exports.update_adminPassword = async (req, res) => {
  await Password.findByIdAndUpdate(
    { _id: req.params.passwordId },
    req.body,
    { new: true },
    (err, password) => {
      if (err) res.send(err);
      res.json(password);
    }
  );
};
