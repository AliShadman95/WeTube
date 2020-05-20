import { GET_VIDEOS, GET_VIDEOS_BY_CATEGORY } from "../constants";
import axios from "axios";

export const getPopularVideos = () => async (dispatch) => {
  try {
    const data = await axios.get("http://localhost:3005/videos/most-popular");
    console.log(data);
    dispatch({ type: GET_VIDEOS, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const getVideosBySearch = (searchValue) => async (dispatch) => {
  try {
    const data = await axios.get(
      `http://localhost:3005/videos/search/${searchValue}`
    );
    console.log(data);
    dispatch({ type: GET_VIDEOS, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const getVideosByCategory = (id) => async (dispatch) => {
  try {
    const data = await axios.get(
      `http://localhost:3005/videos/most-popular/${id}`
    );
    console.log(data);
    switch (id) {
      case "17":
        data.data.category = "sport";
        break;
      case "10":
        data.data.category = "music";
        break;
      case "20":
        data.data.category = "gaming";
        break;
      default:
        break;
    }
    dispatch({ type: GET_VIDEOS_BY_CATEGORY, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
