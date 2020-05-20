const axios = require("axios");
const apiKey = process.env.API_KEY;

exports.list_most_popular_videos = async (req, res) => {
  let id = req.params.categoryId;
  try {
    let data = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%20%2C%20statistics&chart=mostPopular&fields=items%2Fid%2Citems%2Fsnippet%2FpublishedAt%2C%20items%2Fsnippet%2FchannelId%2Citems%2Fsnippet%2Ftitle%2Citems%2Fsnippet%2Fdescription%20%2C%20items%2Fsnippet%2Fthumbnails%2C%20items%2Fsnippet%2FchannelTitle%20%2C%20items%2Fsnippet%2Ftags%20%2C%20items%2Fstatistics&maxResults=50&regionCode=IT&${
        typeof id !== "undefined" ? `videoCategoryId=${id}&` : ""
      }key=${apiKey}`
    );

    res.send(data.data);
  } catch (error) {
    res.send(error);
  }
};

exports.list_videos_by_search = async (req, res) => {
  let searchValue = req.params.title;
  try {
    let data = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&q=${searchValue}&fields=items%2Fid%2FvideoId%2Citems%2Fsnippet%2FpublishedAt%20%2C%20items%2Fsnippet%2FchannelId%2C%20items%2Fsnippet%2FchannelId%20%2C%20items%2Fsnippet%2Fdescription%20%2C%20items%2Fsnippet%2Fthumbnails%20%2C%20items%2Fsnippet%2FchannelTitle%20%2C%20items%2Fsnippet%2Ftitle&type=video&maxResults=50&regionCode=IT&key=${apiKey}`
    );

    res.send(data.data);
  } catch (error) {
    res.send(error);
  }
};

exports.list_comments_by_video = async (req, res) => {
  // chiamata al api di youtube
  const id = req.params.videoId;
  try {
    let data = await axios.get(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%20%2C%20replies&order=relevance&maxResults=100&videoId=${id}&fields=items%2Fid%20%2C%20items%2Fsnippet%20%2C%20items%2Freplies&key=${apiKey}`
    );

    res.send(data.data);
  } catch (error) {
    res.send(error);
  }
};

exports.list_related_videos = async (req, res) => {
  // chiamata al api di youtube
  const id = req.params.videoId;
  try {
    let data = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&regionCode=IT&relatedToVideoId=${id}&type=video&fields=items%2Fid%2FvideoId%20%2C%20items%2Fsnippet%2FpublishedAt%2Citems%2Fsnippet%2FchannelId%20%2C%20items%2Fsnippet%2Ftitle%20%2Citems%2Fsnippet%2Fdescription%20%2C%20items%2Fsnippet%2Fthumbnails%2C%20items%2Fsnippet%2FchannelTitle&key=${apiKey}`
    );

    res.send(data.data);
  } catch (error) {
    res.send(error);
  }
};

exports.get_single_video = async (req, res) => {
  // chiamata al api di youtube
  const id = req.params.videoId;
  try {
    let data = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=player%20%2Cstatistics%20%2Csnippet&id=${id}&regionCode=IT&fields=items&key=${apiKey}`
    );

    res.send(data.data);
  } catch (error) {
    res.send(error);
  }
};
