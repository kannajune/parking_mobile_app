import * as types from "../actions/actionTypes";

export default function carspotReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_AGENCIES_CAR_SPOT:
      return action.carSpotList;
    case types.SAVE_CAR_BOOKING:
      return state.map((book) =>
        book.id === action.book.id ? action.book : book
      );
    case types.UPDATE_CAR_BOOKING:
      return state.map((book) =>
        book.id === action.book.id ? action.book : book
      );
    default:
      return state;
  }
}
