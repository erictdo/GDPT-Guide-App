import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  SafeAreaView,
  Text,
  ScrollView
} from "react-native";
import MenuButton from "../../components/MenuButton";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ImageBackground
          source={require("../../assets/bg.jpg")}
          style={styles.backgroundImage}
        >
          <View style={styles.overlayContainer}>
            <MenuButton navigation={this.props.navigation} />
            <View style={styles.contentContainer}>
              <Text style={styles.title}>G.D.P.T. Information Guide</Text>
              <ScrollView style={styles.homeBox}>
                <Text style={styles.homeText}>
                  Welcome to the G.Đ.P.T. Info Guide App! Gia Đình Phật Tử Việt
                  Nam is a Buddhist youth organization that aims to inspirit its
                  members with Buddhist teachings and ethics. This app allows
                  quick access to information regarding G.Đ.P.T., which includes
                  Buddhism, songs, puzzle letters, and more!
                </Text>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(120,150,120, .5)"
  },
  contentContainer: {
    flex: 1,
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
  homeBox: {
    position: "absolute",
    transform: [{ translateY: 300 }],
    borderColor: "rgba(0,0,0, .2)",
    borderWidth: 3,
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "rgba(0,0,0, .5)",
    width: "80%"
  },
  homeText: {
    textAlign: "center",
    fontFamily: "montserrat-thin",
    fontSize: 20,
    color: "#fff"
  }
});
