import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen
  },
  {
    initialRouteName: "Home"
  },
  {
    contentComponent: CustomDrawerComponent
  }
);

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
