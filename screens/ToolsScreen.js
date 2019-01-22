import React, { Component } from "react";
import { StatusBar, SafeAreaView, View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
import GlobalStyles from "../components/GlobalStyles";
import MenuButton from "../components/MenuButton";
export default class ToolsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Tools ",
    title: "Tools",
    headerStyle: {
      backgroundColor: "rgb(0, 136, 77)"
    }
  };
  render() {
    return (
      <SafeAreaView>
        <View style={GlobalStyles.statusBar} />
        <Header name={this.props.headerName} />{" "}
        <Text style={{ alignItems: "center", justifyContent: "center" }}>
          Hello
        </Text>
      </SafeAreaView>
    );
  }
}
