module.exports = (app) => {
  const practice = require("../controllers/practiceController");

  app
    .route("/practice")
    .get(practice.fetch_practice)
    .post(practice.create_practice);

  app.route("/practice/:practiceId").put(practice.set_isCancel);
};
