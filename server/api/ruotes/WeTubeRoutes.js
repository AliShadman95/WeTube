"use strict";
module.exports = (app) => {
  var weTube = require("../controllers/weTube");

  app.route("/test").get(weTube.list_all_videos);
};
