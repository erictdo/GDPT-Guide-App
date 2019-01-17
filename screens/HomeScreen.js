import React from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableHighlight
} from "react-native";
import { Font } from "expo";
import GlobalStyles from "../components/GlobalStyles";
import MenuButton from "../components/MenuButton";

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
        style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.overlayContainer}>
          <MenuButton navigation={this.props.navigation} />
          {this.state.fontLoaded ? (
            <SafeAreaView style={styles.contentContainer}>
              <Text style={styles.title}>G.D.P.T. Information Guide</Text>
              <Text style={styles.homeText}>
                Welcome to the G.Đ.P.T. Info Guide App! Gia Đình Phật Tử Việt
                Nam is a Buddhist youth organization that aims to inspirit its
                members with Buddhist teachings and ethics. This app allows
                quick access to information regarding G.Đ.P.T., which includes
                Buddhism, songs, puzzle letters, and more!
              </Text>
            </SafeAreaView>
          ) : null}
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(120,150,120, .5)"
  },
  contentContainer: {
    alignItems: "center"
  },
  title: {
    position: "absolute",
    transform: [{ translateY: 87 }],
    color: "#fff",
    textAlign: "center",
    fontFamily: "montserrat-thin",
    fontSize: 32,
    padding: 20,
    backgroundColor: "rgba(0,0,0, .3)",
    width: "100%"
  },
  homeText: {
    position: "absolute",
    transform: [{ translateY: 250 }],
    color: "#fff",
    textAlign: "center",
    fontFamily: "montserrat-thin",
    fontSize: 20,
    borderColor: "rgba(0,0,0, .2)",
    borderWidth: 3,
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "rgba(0,0,0, .5)",
    width: "80%"
  }
});
