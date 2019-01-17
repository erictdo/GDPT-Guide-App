import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";
import GlobalStyles from "./GlobalStyles";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import PrayerScreen from "./screens/PrayerScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={GlobalStyles.droidSafeArea}>
    <View
      style={{
        height: 150,
        backgroundColor: "rbg(0, 168, 90)",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("./assets/hoasen.png")}
        style={{
          height: 120,
          width: 120,
          borderRadius: 100
        }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Prayer: PrayerScreen,
    About: AboutScreen
  },
  {
    initialRouteName: "Home",
    contentComponent: CustomDrawerComponent,
    drawerBackgroundColor: "rgb(220, 255, 220)"
  }
);

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  navHeader: {
    backgroundColor: "rgba(0,0,0, 0.2)"
  }
});
