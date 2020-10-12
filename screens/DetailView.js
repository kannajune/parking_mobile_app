import React, { useEffect } from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as bikspotActions from "../redux/actions/bikspotActions";
import * as carspotActions from "../redux/actions/carspotActions";

import agencyDetailStyles from "../assets/styles/agencyDetailStyles.js";

const DetailView = (props) => {
  useEffect(() => {
    props.loadAgencyBikeSpots();
    props.loadAgencyCarSpots();
  }, []);

  const agencyDetails = props.route.params.agency;
  function LoadSlots(data) {
    return data.spotData.map((item) => {
      return (
        <View style={agencyDetailStyles.bikeSpot} key={item.id}>
          <Button
            color={item.status ? "red" : "green"}
            title={item.spotName}
            onPress={() => {
              console.log(item);
              props.navigation.navigate("Spot Booking", {
                spot: item,
                agency_id: agencyDetails.id,
              });
            }}
          ></Button>
        </View>
      );
    });
  }

  return (
    <ScrollView>
      <View style={agencyDetailStyles.container}>
        <View style={agencyDetailStyles.content}>
          <View>
            <Image
              source={{
                uri:
                  "https://www.cbmclaw.com/wp-content/uploads/2019/12/parking-lot-car-crash-700x321.jpg",
              }}
              style={{ width: "auto", height: 200 }}
            />
          </View>
          <Text style={agencyDetailStyles.header}>{agencyDetails.name}</Text>
          <View style={agencyDetailStyles.address}>
            <Text style={agencyDetailStyles.addressContent}>
              {agencyDetails.address}
            </Text>
            <Text style={agencyDetailStyles.addressContent}>
              Hourly: Rs 100, Weekly: Rs 400, Monthly: Rs 3000
            </Text>
          </View>
          <Text style={agencyDetailStyles.parkTitle}>
            Park / UnPark your vehicle
          </Text>
          <View style={agencyDetailStyles.spotHeader}>
            <Text>Car</Text>
            <Text>
              Available {agencyDetails.carAvailable}/
              {agencyDetails.carTotalspot}
            </Text>
          </View>
          <View style={agencyDetailStyles.parking}>
            <LoadSlots
              spotData={props.carSpotList.length > 0 ? props.carSpotList : []}
            ></LoadSlots>
          </View>
          <View style={agencyDetailStyles.spotHeader}>
            <Text>Bike</Text>
            <Text>
              Available {agencyDetails.bikeAvailable}/
              {agencyDetails.bikeTotalspot}
            </Text>
          </View>
          <View style={agencyDetailStyles.parking}>
            <LoadSlots
              spotData={props.bikeSpotList.length > 0 ? props.bikeSpotList : []}
            ></LoadSlots>
          </View>
          <Text>* Select the spot to park / un-park the vehicle</Text>
        </View>
      </View>
    </ScrollView>
  );
};
DetailView.propTypes = {
  carSpotList: PropTypes.array.isRequired,
  loadAgencyCarSpots: PropTypes.func.isRequired,
  bikeSpotList: PropTypes.array.isRequired,
  loadAgencyBikeSpots: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    carSpotList: state.carSpotList,
    bikeSpotList: state.bikeSpotList,
  };
}

const mapDispatchToProps = {
  loadAgencyCarSpots: carspotActions.loadAgencyCarSpots,
  loadAgencyBikeSpots: bikspotActions.loadAgencyBikeSpots,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
