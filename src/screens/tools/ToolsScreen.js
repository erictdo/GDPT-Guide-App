import React from "react";
import {
  StatusBar,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ImageBackground
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/Header";
import GlobalStyles from "../../components/GlobalStyles";
import MenuButton from "../../components/MenuButton";

export default class ToolsScreen extends React.Component {
  static navigationOptions = {
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
  };
  render() {
    return (
      <SafeAreaView>
        <View style={GlobalStyles.statusBar} />
        <Header style={{ backgroundColor: "rgb(0, 136, 77)" }} />
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.contentContainer}>
          <Text>
            List of tools will go here. Includes morse code, semiphore, and
            puzzle letter examples.
          </Text>
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
    alignItems: "center"
  }
});
