import { StyleSheet, StatusBar } from "react-native";
const agencyDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 20,
    padding: 10,
  },
  content: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
  },
  address: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addressContent: {
    flex: 1,
    padding: 10,
    lineHeight: 30,
  },
  spotTitle: {
    fontSize: 16,
    margin: 10,
  },
  parkTitle: {
    fontSize: 16,
    margin: 5,
    borderBottomWidth: 2,
  },
  parking: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 10,
  },
  carSpot: {
    width: 150,
    height: 50,
  },
  spotHeader: {
    fontSize: 18,
    margin: 5,
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bikeSpot: {
    width: 100,
    height: 50,
  },
});

export default agencyDetailStyles;
