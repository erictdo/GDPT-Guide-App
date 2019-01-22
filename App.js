import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import DrawerNavigator from "./navigation/DrawerNavigator";

export default class App extends React.Component {
  render() {
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
