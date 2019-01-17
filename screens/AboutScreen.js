import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
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

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "About "
  };
  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <MenuButton navigation={this.props.navigation} />
        <SafeAreaView style={styles.contentContainer}>
          <Text>
            This App was made by Eric Do from G.D.P.T. Hue Quang in Westminster,
            California.
          </Text>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
