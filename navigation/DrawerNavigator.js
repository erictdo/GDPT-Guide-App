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
import ToolsScreen from "../screens/ToolsScreen";

const CustomDrawerComponent = props => (
  <SafeAreaView>
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
          height: 130,
          width: 130,
          borderRadius: 150
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
    About: AboutScreen,
    Tools: ToolsScreen
  },
  {
    initialRouteName: "Home",
    contentComponent: CustomDrawerComponent,
    drawerBackgroundColor: "rgb(0, 136, 77)",
    contentOptions: {
      activeTintColor: "rgb(255,105,180)",
      inactiveTintColor: "rgb(255,255,255)",
      itemsContainerStyle: {
        marginVertical: 0
      },
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);

export default createAppContainer(DrawerNavigator);
