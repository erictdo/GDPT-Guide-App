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
import Header from "../components/Header";
import GlobalStyles from "../components/GlobalStyles";
import MenuButton from "../components/MenuButton";

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "About ",
    title: "About"
  };
  render() {
    return (
      <SafeAreaView>
        <View style={GlobalStyles.statusBar} />
        <Header style={{ backgroundColor: "rgb(0, 136, 77)" }} />
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.contentContainer}>
          <Text>
            This App was made by Eric Do from G.D.P.T. Hue Quang in Westminster,
            California.
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
