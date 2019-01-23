import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Font, AppLoading } from "expo";

import DrawerNavigator from "./navigation/DrawerNavigator";

export default class App extends React.Component {
  state = {
    isReady: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      "montserrat-thin": require("./assets/fonts/Montserrat-Thin.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <SafeAreaView style={styles.container}>
        <DrawerNavigator />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
