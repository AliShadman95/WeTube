"use strict";
import axios from "axios";

const apiKey = process.env.API_KEY;

exports.list_most_popular_videos = async (req, res) => {
  // chiamata al api di youtube
  try {
    let data = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=player%2Csnippet%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IT&key=${apiKey}`
    );

    console.log(data);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};
