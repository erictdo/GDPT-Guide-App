import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  statusBar: {
    backgroundColor: "rgb(0, 136, 77)",
    height: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  backgroundPattern: {
    transform: [{ scale: 0.3 }],
    resizeMode: "repeat",
    flex: 1
  }
});
