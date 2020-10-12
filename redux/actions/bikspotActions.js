import * as types from "./actionTypes";

const bikeSpotList = [
  {
    id: 1,
    spotName: "Spot1",
    status: 0,
    vehicleNumber: "",
    vehicleType: "Bike",
    agency_id: "",
  },
  {
    id: 2,
    spotName: "Spot2",
    status: 0,
    vehicleNumber: "",
    vehicleType: "Bike",
    agency_id: "",
  },
  {
    id: 3,
    spotName: "Spot4",
    status: 0,
    vehicleNumber: "",
    vehicleType: "Bike",
    agency_id: "",
  },
  {
    id: 4,
    spotName: "Spot5",
    status: 0,
    vehicleNumber: "",
    vehicleType: "Bike",
    agency_id: "",
  },
  {
    id: 5,
    spotName: "Spot6",
    status: 0,
    vehicleNumber: "",
    vehicleType: "Bike",
    agency_id: "",
  },
  {
    id: 6,
    spotName: "Spot2",
    status: 0,
    vehicleNumber: "",
    vehicleType: "Bike",
    agency_id: "",
  },
];

export function loadAgencyBikeSpotsSuccess(bikeSpotList) {
  return { type: types.LOAD_AGENCIES_BIKE_SPOT, bikeSpotList };
}
export function saveBookingsSuccess(book) {
  return { type: types.SAVE_BIKE_BOOKING, book };
}

export function updateBookingsSuccess(book) {
  return { type: types.UPDATE_BIKE_BOOKING, book };
}

export function loadAgencyBikeSpots() {
  return function (dispatch) {
    return dispatch(loadAgencyBikeSpotsSuccess(bikeSpotList));
  };
}

export function saveBooking(data) {
  const book = {
    id: data.spot.id,
    spotName: data.spot.spotName,
    status: 1,
    vehicleNumber: data.vehicleNumber,
    agency_id: data.agency_id,
    vehicleType: "Bike",
  };
  return function (dispatch) {
    return dispatch(saveBookingsSuccess(book));
  };
}

export function updateBooking(data) {
  const book = {
    id: data.spot.id,
    spotName: data.spot.spotName,
    status: 0,
    vehicleNumber: "",
    agency_id: "",
    vehicleType: "Bike",
  };
  return function (dispatch) {
    return dispatch(updateBookingsSuccess(book));
  };
}
