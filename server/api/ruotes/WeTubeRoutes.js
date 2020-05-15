"use strict";
module.exports = (app) => {
  var weTube = require("../controllers/weTube");

  app.route("/videos/most-popular").get(weTube.list_most_popular_videos);
};
