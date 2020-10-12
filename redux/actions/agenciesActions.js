import * as types from "./actionTypes";

const agencies = [
  {
    id: "1",
    name: " KSN Parking Lot",
    vehicleType: "Car",
    address: "A13, Brigade, No 122 Kanakapura Road",
    location: "Chennai",
    carAvailable: 5,
    carTotalspot: 8,
    bikeAvailable: 0,
    bikeTotalspot: 0,
  },
  {
    id: "2",
    name: " Ramesh Parking Lot",
    vehicleType: "Bike",
    address: "B12, Mount Road",
    location: "Mount Road",
    carAvailable: 0,
    carTotalspot: 0,
    bikeAvailable: 4,
    bikeTotalspot: 5,
  },
  {
    id: "3",
    name: " TTK  Parking Space",
    vehicleType: "Both",
    address: "No 122, TTK Road Road",
    location: "TTK Road",
    carAvailable: 5,
    carTotalspot: 5,
    bikeAvailable: 5,
    bikeTotalspot: 5,
  },
  {
    id: "4",
    name: " Rams Apartments",
    vehicleType: "Both",
    address: "B13, Brigade, No 122 Kanakapura Road",
    location: "Tenampet",
    carAvailable: 3,
    carTotalspot: 5,
    bikeAvailable: 5,
    bikeTotalspot: 5,
  },
  {
    id: "5",
    name: " Twin Tower",
    vehicleType: "Bike",
    address: "TN Nandagopal Road",
    location: "TN Road",
    carAvailable: 0,
    carTotalspot: 0,
    bikeAvailable: 5,
    bikeTotalspot: 5,
  },
];

export function loadAgenciesSuccess(agencies) {
  return { type: types.LOAD_AGENCIES_SUCCESS, agencies };
}
export function loadAgencies() {
  return function (dispatch) {
    return dispatch(loadAgenciesSuccess(agencies));
  };
}
