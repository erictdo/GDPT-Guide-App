import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Icon
} from "native-base";
import GlobalStyles from "../GlobalStyles";

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "About "
  };
  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
          <Body />
          <Right />
        </Header>
        <Text>This App was made by Eric Do.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
