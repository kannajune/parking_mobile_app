import { StyleSheet, StatusBar } from "react-native";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#ecf0f1",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,

    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    textAlign: "center",
  },
  subItemContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 10,
  },
  subHeader: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 2,
  },
  icon: {
    fontSize: 25,
    textAlign: "center",
  },
});

export default homeStyles;
