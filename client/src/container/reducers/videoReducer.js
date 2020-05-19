import { GET_VIDEOS } from "../constants";

const initialState = {
  items: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS: {
      console.log(action.payload);
      return { ...state, items: action.payload };
    }
    default:
      return state;
  }
}
