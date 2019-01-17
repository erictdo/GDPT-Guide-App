import React, { Component } from "react";
import {
  Platform,
  Dimensions,
  SafeAreaView,
  View,
  Image,
  ScrollView
} from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";

import GlobalStyles from "../components/GlobalStyles";

import HomeScreen from "../screens/HomeScreen";
import PrayerScreen from "../screens/PrayerScreen";
import AboutScreen from "../screens/AboutScreen";

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
        source={require("../assets/hoasen.png")}
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

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Prayer: PrayerScreen,
    About: AboutScreen
  },
  {
    initialRouteName: "Home",
    contentComponent: CustomDrawerComponent,
    drawerBackgroundColor: "rgb(230, 255, 230)"
  }
);

export default createAppContainer(DrawerNavigator);
