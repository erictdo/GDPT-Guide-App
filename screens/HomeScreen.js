import React from "react";
import { StyleSheet, ImageBackground, View, Text } from "react-native";
import { Font } from "expo";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home "
  };
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      "montserrat-thin": require("../assets/fonts/Montserrat-Thin.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <ImageBackground
        source={require("../assets/bg.jpg")}
        style={styles.startContainer}
      >
        <View style={styles.overlayContainer}>
          {this.state.fontLoaded ? (
            <View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>G.D.P.T. Information Guide</Text>
              </View>
              <View style={styles.homeTextContainer}>
                <Text style={styles.homeText}>
                  Welcome to the G.D.P.T. Info Guide App! Gia Đình Phật Tử Việt
                  Nam is a Buddhist youth organization that aims to inspirit its
                  members with Buddhist teachings and ethics. This app allows
                  quick access to information regarding G.D.P.T., which includes
                  Buddhism, songs, morse code, and more!
                </Text>
              </View>
            </View>
          ) : null}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  startContainer: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(120,150,120, .5)"
  },
  homeTextContainer: {
    transform: [{ translateY: 200 }],
    alignItems: "center"
  },
  homeText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "montserrat-thin",
    fontSize: 18,
    borderColor: "#fff",
    borderWidth: 2,
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "rgba(0,0,0, .3)",
    width: "80%"
  },
  container: {
    flex: 1,
    alignItems: "center"
  },
  titleContainer: {
    transform: [{ translateY: 100 }],
    alignItems: "center"
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "montserrat-thin",
    fontSize: 32,
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "rgba(0,0,0, .3)",
    width: "80%"
  }
});
