import React from "react";
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import GlobalStyles from "../components/GlobalStyles";
import MenuButton from "../components/MenuButton";

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

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={GlobalStyles.statusBar} />
        <Header name={this.props.headerName} />
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <View style={styles.titleBackground}>
              <Text style={styles.title}>1| Trầm Hương Đốt</Text>
            </View>
            <ScrollView styles={styles.scrollStyles}>
              <View style={styles.lyricsContainer}>
                <Text style={styles.lyrics}>
                  Trầm hương đốt, xông ngát mười phương,{"\n"}
                  Nguyện nguyện kính đức Nghiêm Từ vô lượng,{"\n"}
                  Cầu cầu xin chứng tâm thành chúng con,{"\n"}
                  Vần vần khói kết mây lành cúng dường,{"\n"}
                  {"\n"}
                  Ðạo nhiệm màu đã lang truyền nơi cùng nơi,{"\n"}
                  Nhờ chân lý chúng sanh đều thoát luân hồi,{"\n"}
                  Ðồng qúy kính qùy dưới đài sen,{"\n"}
                  Dâng hoa thơm tinh khiết màu thắm tươi cành,{"\n"}
                  {"\n"}
                  Ðài quang minh sáng huy hoàng trang nghiêm,{"\n"}
                  Ơn mười phương điều ngự hào quang an lành,{"\n"}
                  Nhìn đạo uyển chuyễn soi khắp cùng quần sanh,{"\n"}
                  Phật đạo đồng cùng nhau tu tin tấn mau viên thành,{"\n"}
                  {"\n"}
                  Nam mô Bổn Sư Thích Ca Mâu Ni Phật (C), {"\n"}
                  Nam mô Bổn Sư Thích Ca Mâu Ni Phật.
                </Text>
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
  titleBackground: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,150,0, .1)"
  },
  title: {
    width: "90%",
    fontSize: 32,
    color: "rgba(0,100,0,1)"
  },
  scrollStyles: {
    flex: 9
  },
  lyricsContainer: {
    paddingTop: 10,
    alignItems: "center"
  },
  lyrics: {
    fontSize: 18,
    width: "90%",
    color: "rgba(0,10,0,0.8)"
  }
});
