import * as types from "../actions/actionTypes";

export default function agenciesReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_AGENCIES_SUCCESS:
      return action.agencies;
    default:
      return state;
  }
}
