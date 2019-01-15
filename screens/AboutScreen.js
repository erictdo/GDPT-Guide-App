import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "About "
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This App was made by Eric Do.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
