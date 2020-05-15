"use strict";
module.exports = (app) => {
  var weTube = require("../controllers/weTube");

  app.route("/videos/most-popular").get(weTube.list_most_popular_videos);
  app.route("/videos/most-popular/:id").get(weTube.list_most_popular_videos);
  app.route("/videos/search/:title").get(weTube.list_most_popular_videos);
  app.route("/comments/:videoId").get(weTube.list_comments_by_video);
};
