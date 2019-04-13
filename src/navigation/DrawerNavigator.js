import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  ScrollView,
  Platform,
  StatusBar
} from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";

import HomeScreen from "../screens/home/HomeScreen";
import PrayerScreen from "../screens/prayer/PrayerScreen";
import AboutScreen from "../screens/about/AboutScreen";
import ToolNavigator from "./ToolNavigator";

import { Ionicons } from "@expo/vector-icons";

const CustomDrawerComponent = props => (
  <SafeAreaView
    style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }}
  >
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
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: "Home ",
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            name="md-home"
            style={{
              fontSize: 24,
              color: tintColor,
              textShadowOffset: {
                width: 1,
                height: 1
              }
            }}
          />
        )
      }
    },
    Prayer: {
      screen: PrayerScreen,
      navigationOptions: {
        drawerLabel: "Prayers ",
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            name="md-hand"
            style={{
              fontSize: 24,
              color: tintColor,
              textShadowOffset: {
                width: 1,
                height: 1
              }
            }}
          />
        )
      }
    },
    Tools: {
      screen: ToolNavigator,
      navigationOptions: {
        drawerLabel: "Tools ",
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            name="md-hammer"
            style={{
              fontSize: 24,
              color: tintColor,
              textShadowOffset: {
                width: 1,
                height: 1
              }
            }}
          />
        )
      }
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        drawerLabel: "About ",
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            name="md-information-circle-outline"
            style={{
              fontSize: 24,
              color: tintColor,
              textShadowOffset: {
                width: 1,
                height: 1
              }
            }}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: CustomDrawerComponent,
    drawerBackgroundColor: "rgb(0, 136, 77)",
    contentOptions: {
      activeTintColor: "rgb(255,105,180)",
      inactiveTintColor: "rgb(255,255,255)",
      labelStyle: {
        fontWeight: "normal",
        fontSize: 16,
        textShadowOffset: {
          width: 1,
          height: 1
        }
      }
    }
  }
);

export default createAppContainer(DrawerNavigator);
