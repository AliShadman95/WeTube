import { GET_VIDEOS, GET_VIDEOS_BY_CATEGORY } from "../constants";

const initialState = { items: [], itemsByCategory: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOS: {
      return { ...state, items: action.payload };
    }
    case GET_VIDEOS_BY_CATEGORY: {
      return {
        ...state,
        itemsByCategory: [...state.itemsByCategory, action.payload],
      };
    }
    default:
      return state;
  }
};
