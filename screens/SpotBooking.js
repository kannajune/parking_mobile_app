import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as carspotActions from "../redux/actions/carspotActions";
import * as bikspotActions from "../redux/actions/bikspotActions";

const SpotBooking = (props) => {
  const spot = props.route.params.spot;
  const agency_id = props.route.params.agency_id;
  const [vehicleNumber, setVehicleNumber] = useState("");
  function Save() {
    if (spot.vehicleType == "Car") {
      props.saveCarBooking({
        spot: spot,
        vehicleNumber: vehicleNumber,
        agency_id: agency_id,
      });
    } else {
      props.saveBikeBooking({
        spot: spot,
        vehicleNumber: vehicleNumber,
        agency_id: agency_id,
      });
    }
    props.navigation.goBack();
  }

  function Update() {
    if (spot.vehicleType == "Car") {
      props.updateCarBooking({
        spot: spot,
        vehicleNumber: vehicleNumber,
        agency_id: agency_id,
      });
    } else {
      props.updateBikeBooking({
        spot: spot,
        vehicleNumber: vehicleNumber,
        agency_id: agency_id,
      });
    }

    props.navigation.goBack();
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {spot.status == false ? (
        <View>
          <TextInput
            style={{
              margin: 15,
              height: 40,
              borderColor: "#000",
              borderWidth: 2,
              borderRadius: 3,
              padding: 5,
            }}
            type="text"
            placeholder="Enter the vehicle number"
            value={vehicleNumber}
            onChangeText={(text) => setVehicleNumber(text)}
          />
        </View>
      ) : (
        <View></View>
      )}

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginRight: 2 }}>
          <Button
            color="#4CAF50"
            onPress={spot.status ? Update : Save}
            title={spot.status ? "Unpark" : "Park"}
          />
        </View>
        <View style={{ marginLeft: 2 }}>
          <Button
            color="#F44336"
            onPress={() => props.navigation.goBack()}
            title="Cancel"
          />
        </View>
      </View>
    </View>
  );
};

SpotBooking.propTypes = {
  saveCarBooking: PropTypes.func.isRequired,
  updateCarBooking: PropTypes.func.isRequired,
  saveBikeBooking: PropTypes.func.isRequired,
  updateBikeBooking: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    carSpotList: state.carSpotList,
    bikeSpotList: state.bikeSpotList,
  };
}

const mapDispatchToProps = {
  saveCarBooking: carspotActions.saveBooking,
  updateCarBooking: carspotActions.updateBooking,
  saveBikeBooking: bikspotActions.saveBooking,
  updateBikeBooking: bikspotActions.updateBooking,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotBooking);
