import { GET_VIDEOS, GET_VIDEOS_BY_CATEGORY } from "../constants";

const initialState = { items: [], itemsByCategory: [] };

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS: {
      console.log(action.payload);
      console.log(state);
      return { ...state, items: action.payload };
    }
    case GET_VIDEOS_BY_CATEGORY: {
      console.log(action.payload);
      console.log(state);
      return {
        ...state,
        itemsByCategory: [...state.itemsByCategory, action.payload],
      };
    }
    default:
      return state;
  }
}
