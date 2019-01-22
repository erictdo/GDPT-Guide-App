import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  statusBar: {
    backgroundColor: "rgb(0, 136, 77)",
    height: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
