import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Left, Right, Icon } from "native-base";

export default class PrayerScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Prayers "
  };
  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Icon name="menu" />
          </Left>
        </Header>
        <Text>Prayers</Text>
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
