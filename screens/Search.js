import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

import { connect } from "react-redux";
import * as agenciesActions from "../redux/actions/agenciesActions";
import * as carspotActions from "../redux/actions/carspotActions";
import * as bikspotActions from "../redux/actions/bikspotActions";

import searchStyles from "../assets/styles/searchStyles.js";

const vehicleOptions = [
  {
    key: "Car",
    text: "Car",
  },
  {
    key: "Bike",
    text: "Bike",
  },
];

const Search = (props) => {
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleData, setVehicleData] = useState("");
  const [searchData, setSearchData] = useState("");
  const [agencyDetails, setAgencyDetails] = useState("");
  useEffect(() => {
    // props.loadAgencyBikeSpots();
    props.loadAgencyCarSpots();
    props.loadBikesData();
    props.loadAgencies();
  }, []);

  function searchVehicleDetails() {
    console.log(vehicleType);
    if (vehicleType == "Car") {
      const vehicle = props.carSpotList.filter((obj) => {
        return obj.vehicleNumber == searchData;
      });
      setVehicleData(vehicle[0]);
    } else {
      const vehicle = props.bikeSpotList.filter((obj) => {
        return obj.vehicleNumber == searchData;
      });
      setVehicleData(vehicle[0]);
    }
    if (vehicleData) {
      const agency = props.agencies.filter((obj) => {
        return obj.id == vehicleData.agency_id;
      });
      setAgencyDetails(agency[0]);
    }
  }

  function RadioButtons(data) {
    return data.options.map((item) => {
      return (
        <View key={item.key} style={searchStyles.buttonContainer}>
          <TouchableOpacity
            style={searchStyles.circle}
            value={vehicleType}
            onPress={() => setVehicleType(item.key)}
          />
          {vehicleType === item.key && (
            <View style={searchStyles.checkedCircle} />
          )}
          <Text> {item.text}</Text>
        </View>
      );
    });
  }

  return (
    <SafeAreaView style={searchStyles.container}>
      <View style={searchStyles.content}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View>
            <TextInput
              style={searchStyles.TextInput}
              placeholder="Enter your vehicle number"
              value={searchData}
              onChangeText={(text) => setSearchData(text)}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Button title="Search" onPress={searchVehicleDetails}></Button>
          </View>
        </View>
        <RadioButtons options={vehicleOptions} />
        {vehicleData ? (
          <View>
            <Text>Your Vehicle Parked in </Text>
            <Text>Agency Name {agencyDetails ? agencyDetails.name : ""}</Text>
            <Text>Spot Name {vehicleData ? vehicleData.spotName : ""}</Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </SafeAreaView>
  );
};

function mapStateToProps(state) {
  return {
    agencies: state.agencies,
    carSpotList: state.carSpotList,
    bikeSpotList: state.bikeSpotList,
  };
}

const mapDispatchToProps = {
  loadAgencies: agenciesActions.loadAgencies,
  loadAgencyCarSpots: carspotActions.loadAgencyCarSpots,
  loadBikesData: bikspotActions.loadAgencyBikeSpots,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
