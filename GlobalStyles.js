import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    borderColor: "rgba(0,0,0, .2)",
    borderWidth: 0,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
