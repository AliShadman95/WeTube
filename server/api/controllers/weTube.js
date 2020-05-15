const axios = require("axios");
const apiKey = process.env.API_KEY;

exports.list_most_popular_videos = async (req, res) => {
  let id = req.params.id;
  try {
    let data = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=player%2Csnippet%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IT&${
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
      `https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&q=${searchValue}&regionCode=IT&key=[YOUR_API_KEY]`
    );

    res.send(data.data);
  } catch (error) {
    res.send(error);
  }
};

exports.list_comments_by_video = async (req, res) => {
  // chiamata al api di youtube
  const id = "0";
  try {
    let data = await axios.get(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&order=relevance&videoId=EZXvdPZx-PY&key=${apiKey}`
    );

    res.send(data.data);
  } catch (error) {
    res.send(error);
  }
};
