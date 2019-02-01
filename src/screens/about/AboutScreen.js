import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/Header";
import GlobalStyles from "../../components/GlobalStyles";
import MenuButton from "../../components/MenuButton";

export default class AboutScreen extends React.Component {
  static navigationOptions = {
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
  };
  render() {
    return (
      <SafeAreaView>
        <View style={GlobalStyles.statusBar} />
        <Header style={{ backgroundColor: "rgb(0, 136, 77)" }} />
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.contentContainer}>
          <Text>
            This App was made by Eric Do from GĐPT Hue Quang in Westminster,
            California.
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
