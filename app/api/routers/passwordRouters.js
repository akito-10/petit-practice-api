module.exports = (app) => {
  const password = require("../controllers/passwordController");

  app
    .route("/password")
    .get(password.fetch_password)
    .post(password.create_password);

  app.route("/password/:passwordId").put(password.update_adminPassword);
};
