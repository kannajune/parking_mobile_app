import { StyleSheet, StatusBar } from "react-native";
const searchStyles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: StatusBar.currentHeight || 0,
  },
  content: {
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
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    margin: 15,
    height: 35,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 3,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ACACAC",
    alignItems: "center",
    justifyContent: "center",
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#794F9B",
    marginLeft: -17,
  },
});

export default searchStyles;
