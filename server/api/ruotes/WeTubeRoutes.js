"use strict";
module.exports = (app) => {
  var weTube = require("../controllers/weTube");

  app.route("/videos/:videoId").get(weTube.get_single_video);
  app.route("/videos/most-popular").get(weTube.list_most_popular_videos);
  app
    .route("/videos/most-popular/:categoryId")
    .get(weTube.list_most_popular_videos);
  app.route("/videos/search/:title").get(weTube.list_videos_by_search);
  app.route("/videos/related/:videoId").get(weTube.list_related_videos);
  app.route("/comments/:videoId").get(weTube.list_comments_by_video);
};
