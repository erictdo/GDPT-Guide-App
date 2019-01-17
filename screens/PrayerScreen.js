import React, { Component } from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Icon
} from "native-base";
import GlobalStyles from "../components/GlobalStyles";
import MenuButton from "../components/MenuButton";

export default class PrayerScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Prayers "
  };
  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <MenuButton navigation={this.props.navigation} />
        <SafeAreaView style={styles.contentContainer}>
          <Text>Prayers</Text>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
