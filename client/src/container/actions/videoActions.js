import { GET_VIDEOS } from "../constants";
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
