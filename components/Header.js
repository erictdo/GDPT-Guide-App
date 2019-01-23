import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Platform } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.headerStyle}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{this.props.name}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    height: Platform.OS === "ios" ? 64 : 56,
    backgroundColor: "rgb(0, 136, 77)"
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: "center"
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    transform: [{ translateX: 80 }],
    fontFamily: "montserrat-thin",
    fontWeight: "400"
  }
});
