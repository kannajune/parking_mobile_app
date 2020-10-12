import * as types from "../actions/actionTypes";

export default function bikespotReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_AGENCIES_BIKE_SPOT:
      return action.bikeSpotList;
    case types.SAVE_BIKE_BOOKING:
      return state.map((book) =>
        book.id === action.book.id ? action.book : book
      );
    case types.UPDATE_BIKE_BOOKING:
      return state.map((book) =>
        book.id === action.book.id ? action.book : book
      );
    default:
      return state;
  }
}
