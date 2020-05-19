import { GET_VIDEOS } from "../constants";
import axios from "axios";

export const getVideos = () => async (dispatch) => {
  try {
    const data = await axios.get("http://localhost:3005/videos/most-popular");
    console.log(data);
    dispatch({ type: GET_VIDEOS, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
