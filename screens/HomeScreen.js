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
import { Container, Content, Header, Left, Right, Body } from "native-base";
import { Font } from "expo";
import GlobalStyles from "../GlobalStyles";

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
        style={[styles.container, GlobalStyles.droidSafeArea]}
      >
        <SafeAreaView style={styles.overlayContainer}>
          <Header
            style={{
              backgroundColor: "rgba(0,110,50, .5)",
              borderColor: "rgba(0,0,0, 1)",
              borderWidth: 5
            }}
          >
            <Left>
              <TouchableHighlight
                onPress={() => this.props.navigation.openDrawer()}
                style={{
                  borderColor: "rgba(0,0,0, .2)",
                  borderWidth: 5,
                  transform: [{ scale: 0.25 }]
                }}
              >
                <Image
                  source={require("../assets/menu-icon.png")}
                  style={{
                    transform: [{ scale: 0.7 }]
                  }}
                />
              </TouchableHighlight>
            </Left>
            <Body />
            <Right />
          </Header>
          {this.state.fontLoaded ? (
            <SafeAreaView>
              <SafeAreaView style={styles.titleContainer}>
                <Text style={styles.title}>G.D.P.T. Information Guide</Text>
              </SafeAreaView>
              <SafeAreaView style={styles.homeTextContainer}>
                <Text style={styles.homeText}>
                  Welcome to the G.Đ.P.T. Info Guide App! Gia Đình Phật Tử Việt
                  Nam is a Buddhist youth organization that aims to inspirit its
                  members with Buddhist teachings and ethics. This app allows
                  quick access to information regarding G.Đ.P.T., which includes
                  Buddhism, songs, puzzle letters, and more!
                </Text>
              </SafeAreaView>
            </SafeAreaView>
          ) : null}
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rbg(0, 168, 90)",
    width: "100%",
    height: "100%"
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(120,150,120, .5)"
  },
  titleContainer: {
    transform: [{ translateY: 50 }],
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
    width: "100%"
  },
  homeTextContainer: {
    transform: [{ translateY: 220 }],
    alignItems: "center"
  },
  homeText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "montserrat-thin",
    fontSize: 20,
    borderColor: "rgba(0,0,0, .2)",
    borderWidth: 5,
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "rgba(0,0,0, .5)",
    width: "80%"
  }
});
