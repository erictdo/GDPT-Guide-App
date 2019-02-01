import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Picker,
  Platform,
  StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/Header";
import GlobalStyles from "../../components/GlobalStyles";
import MenuButton from "../../components/MenuButton";
import PrayerList from "./PrayerList";

export default class PrayerScreen extends React.Component {
  static navigationOptions = {
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
  };
  static defaultProps = {
    headerName: "Prayers"
  };
  constructor(props) {
    super(props);
    this.state = {
      prayerSelection: "1| Trầm Hương Đốt",
      prayerIndex: 0
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={GlobalStyles.statusBar} />
        <Header name={this.props.headerName} />
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <View style={styles.titleBackground}>
              <Picker
                style={styles.title}
                selectedValue={this.state.prayerSelection}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({
                    prayerSelection: itemValue,
                    prayerIndex: itemIndex
                  })
                }
              >
                <Picker.Item label="1|   Trầm Hương Đốt" value="1" />
                <Picker.Item label="2|   Chủ Lễ" value="2" />
                <Picker.Item label="3|   Bài Sám Hối" value="3" />
                <Picker.Item label="4|   Niệm Phật và Bồ Tát" value="4" />
                <Picker.Item label="5|   Bốn Lời Nguyện Rộng Lớn" value="5" />
                <Picker.Item label="6|   Tam Tự Quy Y" value="6" />
                <Picker.Item label="7|   Hồi Hướng" value="7" />
              </Picker>
            </View>
            <ScrollView styles={styles.scrollStyles}>
              <View style={styles.lyricsContainer}>
                <PrayerList index={this.state.prayerIndex} />
              </View>
            </ScrollView>
          </View>
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
  },
  content: {
    flex: 1,
    width: "100%"
  },
  listIcon: {
    zIndex: 9,
    position: "absolute",
    transform: [{ translateX: 160 }],
    top: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  titleBackground: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,150,0, .1)"
  },
  title: {
    width: "100%",
    height: "55%",
    transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }, { translateX: 90 }],
    color: "rgba(0,100,0,1)"
  },
  scrollStyles: {
    flex: 9
  },
  lyricsContainer: {
    paddingVertical: 20,
    alignItems: "center"
  },
  lyrics: {
    fontSize: 18,
    width: "90%",
    color: "rgba(0,10,0,0.8)"
  }
});
