import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableHighlight,
} from "react-native";
import homeStyles from "../assets/styles/homeStyles.js";
import Ionicons from "react-native-vector-icons/Ionicons";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as agenciesActions from "../redux/actions/agenciesActions";

const Item = ({ item }) => (
  <View style={homeStyles.item}>
    <Text style={homeStyles.header}>{item.name}</Text>
    <View style={homeStyles.subItemContainer}>
      <View>
        <Ionicons name="ios-pin" style={homeStyles.icon}></Ionicons>
        <Text style={homeStyles.subHeader}>{item.location}</Text>
      </View>
      <View>
        <Text style={homeStyles.subHeader}>Type</Text>
        <Text style={homeStyles.subHeader}>{item.vehicleType}</Text>
      </View>
      <View>
        <Text style={homeStyles.subHeader}>Available</Text>
        <Text style={homeStyles.subHeader}>
          Car: {item.carAvailable} / {item.carTotalspot} | Bike:
          {item.bikeAvailable} / {item.bikeTotalspot}
        </Text>
      </View>
    </View>
  </View>
);
const Home = (props) => {
  useEffect(() => {
    props.loadAgencies();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableHighlight
        underlayColor="#DDDDDD"
        key={item.key}
        onPress={() =>
          props.navigation.navigate("Agency Detail View", { agency: item })
        }
      >
        <Item item={item} />
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={homeStyles.container}>
      <FlatList
        data={props.agencies.length > 0 ? props.agencies : ""}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

Home.propTypes = {
  agencies: PropTypes.array.isRequired,
  loadAgencies: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    agencies: state.agencies,
  };
}

const mapDispatchToProps = {
  loadAgencies: agenciesActions.loadAgencies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
