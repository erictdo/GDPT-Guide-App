import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import Header from "../../components/Header";
import GlobalStyles from "../../components/GlobalStyles";
import MenuButton from "../../components/MenuButton";

export default class MorseScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={GlobalStyles.statusBar} />
        <Header style={{ backgroundColor: "rgb(0, 136, 77)" }} />
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.contentContainer}>
          <Text>MORSE CODE SCREEN</Text>
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
