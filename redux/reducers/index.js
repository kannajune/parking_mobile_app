import { combineReducers } from "redux";
import agencies from "./agenciesReducer";
import carSpotList from "./carspotReducer";
import bikeSpotList from "./bikespotReducer";

const rootReducer = combineReducers({
  agencies,
  carSpotList,
  bikeSpotList,
});

export default rootReducer;
