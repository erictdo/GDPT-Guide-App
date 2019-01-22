import React, { Component } from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { Font, AppLoading } from "expo";
import Header from "../components/Header";
import GlobalStyles from "../components/GlobalStyles";
import MenuButton from "../components/MenuButton";

export default class PrayerScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Prayers "
  };
  static defaultProps = {
    headerName: "Prayers"
  };
  state = {
    isReady: false
  };
  async componentDidMount() {
    await Font.loadAsync({});
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={GlobalStyles.statusBar} />
        <Header name={this.props.headerName} />
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.contentContainer}>
          <Text>Prayers Hello</Text>
        </View>
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
