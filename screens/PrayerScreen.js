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

export default class PrayerScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Prayers "
  };
  render() {
    return (
      <Container style={GlobalStyles.droidSafeArea}>
        <Header
          style={{
            backgroundColor: "rgba(0,110,50, .5)"
          }}
        >
          <Left>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
          <Body />
          <Right />
        </Header>
        <Content style={styles.contentContainer}>
          <Text>Prayers</Text>
        </Content>
      </Container>
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
