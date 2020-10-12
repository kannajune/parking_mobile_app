import * as types from "./actionTypes";
const carSpotList = [
  {
    id: 1,
    spotName: "Spot1",
    status: 0,
    vehicleNumber: "",
    vehicleType: "Car",
    agency_id: "",
  },
  {
    id: 2,
    spotName: "Spot2",
    status: 0,
    vehicleNumber: "",
    vehicleType: "Car",
    agency_id: "",
  },
  {
    id: 3,
    spotName: "Spot4",
    status: 0,
    vehicleNumber: "",
    vehicleType: "Car",
    agency_id: "",
  },
  {
    id: 4,
    spotName: "Spot5",
    status: 0,
    vehicleNumber: "",
    vehicleType: "Car",
    agency_id: "",
  },
  {
    id: 5,
    spotName: "Spot6",
    status: 0,
    vehicleNumber: "",
    vehicleType: "Car",
    agency_id: "",
  },
  {
    id: 6,
    spotName: "Spot2",
    status: 0,
    vehicleNumber: "",
    vehicleType: "Car",
    agency_id: "",
  },
];

export function loadAgencyCarSpotsSuccess(carSpotList) {
  return { type: types.LOAD_AGENCIES_CAR_SPOT, carSpotList };
}

export function saveBookingsSuccess(book) {
  return { type: types.SAVE_CAR_BOOKING, book };
}

export function updateBookingsSuccess(book) {
  return { type: types.UPDATE_CAR_BOOKING, book };
}

export function loadAgencyCarSpots() {
  return function (dispatch) {
    return dispatch(loadAgencyCarSpotsSuccess(carSpotList));
  };
}

export function saveBooking(data) {
  const book = {
    id: data.spot.id,
    spotName: data.spot.spotName,
    status: 1,
    vehicleNumber: data.vehicleNumber,
    vehicleType: "Car",
    agency_id: data.agency_id,
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
    vehicleType: "Car",
    agency_id: "",
  };
  return function (dispatch) {
    console.log(10100);
    return dispatch(updateBookingsSuccess(book));
  };
}
