module.exports = (app) => {
  const event = require("../controllers/eventController");

  app.route("/event").get(event.fetch_event).post(event.create_event);

  app.route("/event/:eventId").put(event.update_event);
};
