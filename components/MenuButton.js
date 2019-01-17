import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class MenuButton extends React.Component {
  render() {
    return (
      <Ionicons
        name="md-menu"
        color="#000000"
        size={32}
        style={styles.menuIcon}
        onPress={() => this.props.navigation.toggleDrawer()}
      />
    );
  }
}

const styles = StyleSheet.create({
  menuIcon: {
    zIndex: 9,
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20
  }
});
