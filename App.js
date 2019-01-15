import React from "react";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";
import { Font } from "expo";

class StartScreen extends React.Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      "montserrat-thin": require("./assets/fonts/Montserrat-Thin.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <ImageBackground
        source={require("./assets/bg.jpg")}
        style={styles.startContainer}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.button}>
            {this.state.fontLoaded ? (
              <Text style={styles.buttonText}>
                Welcome to the G.D.P.T. Guide App. Gia Đình Phật Tử Việt Nam is
                a Buddhist youth organization that aims to inspirit its members
                with Buddhist teachings and ethics. This app allows quick access
                to information regarding G.D.P.T., from Buddhism, songs, morse
                code, and more!
              </Text>
            ) : null}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home ",
    headerStyle: {
      backgroundColor: "orange"
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

class AboutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "About "
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This App was made by Eric Do.</Text>
      </View>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator(
  {
    Start: StartScreen,
    Home: HomeScreen,
    About: AboutScreen
  },
  {
    initialRouteName: "Start"
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#orange"
      }
    }
  }
);

const AppContainer = createAppContainer(AppDrawerNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
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
    backgroundColor: "rgba(130,150,130, .5)"
  },
  button: {
    height: "150%",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
    fontFamily: "montserrat-thin",
    fontSize: 16,
    borderColor: "#fff",
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "rgba(0,0,0, .3)"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
