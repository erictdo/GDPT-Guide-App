import React from "react";

import { StyleSheet, Text, View } from "react-native";

class PrayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  render() {
    if (this.props.index == 0) {
      return (
        <Text style={styles.lyrics}>
          Trầm hương đốt, xông ngát mười phương, {"\n"}
          Nguyện nguyện kính đức Nghiêm Từ vô lượng, {"\n"}
          Cầu cầu xin chứng tâm thành chúng con, {"\n"}
          Vần vần khói kết mây lành cúng dường, {"\n"}
          {"\n"}
          Ðạo nhiệm màu đã lang truyền nơi cùng nơi,{"\n"}
          Nhờ chân lý chúng sanh đều thoát luân hồi, {"\n"}
          Ðồng qúy kính qùy dưới đài sen, {"\n"}
          Dâng hoa thơm tinh khiết màu thắm tươi cành, {"\n"}
          {"\n"}
          Ðài quang minh sáng huy hoàng trang nghiêm, {"\n"}
          Ơn mười phương điều ngự hào quang an lành, {"\n"}
          Nhìn đạo uyển chuyễn soi khắp cùng quần sanh, {"\n"}
          Phật đạo đồng cùng nhau tu tin tấn mau viên thành, {"\n"}
          {"\n"}
          Nam mô Bổn Sư Thích Ca Mâu Ni Phật, (C) {"\n"}
          Nam mô Bổn Sư Thích Ca Mâu Ni Phật. (C) {"\n"}
        </Text>
      );
    } else if (this.props.index == 1) {
      return (
        <View style={styles.container}>
          <Text style={styles.lyricTitle}>Cúng Hương {"\n"}</Text>
          <Text style={styles.lyrics}>
            Nguyện đem lòng thành kinh {"\n"}
            Gửi theo đám mây hương {"\n"}
            Phưởng phất khắp mười phương {"\n"}
            Cúng dường ngôi tam bảo (C) {"\n"}
            Thề trọn đời giữ đạo {"\n"}
            Theo tự tánh làm lành {"\n"}
            Cùng pháp giới chúng sanh {"\n"}
            Cầu phật từ gia hộ {"\n"}
            Tâm Bồ Đề kiên cố {"\n"}
            Xa bể khổ nguồn mê {"\n"}
            Chóng quay về bờ giác (C) {"\n"}
          </Text>
          <Text style={styles.lyricTitle}>Tán Phật {"\n"}</Text>
          <Text style={styles.lyrics}>
            Đấng pháp vương vô thượng {"\n"}
            Ba cõi chẳng ai bằng {"\n"}
            Thầy dạy khắp trời người {"\n"}
            Cha lành chung bốn loại {"\n"}
            Quy y trọn một niệm {"\n"}
            Đứt sạch nghiệp ba kỳ {"\n"}
            Xưng dương cùng tán thán {"\n"}
            Ức kiếp không cùng tận (C) {"\n"}
          </Text>
          <Text style={styles.lyricTitle}>Kỳ Nguyện {"\n"}</Text>
          <Text style={styles.lyrics}>
            Hôm nay là ngày __ tháng __ năm ___ toàn thể Huynh Trương và đoàn
            sinh Gia Đình Phật Tử (Chùa) chúng con đồng thành thật để chúc, bổn
            sư Thích Ca Mau Ni Phật, cùng thể thảy Chư Phật bồ tác trong mười
            phương, từ bi gia hộ cho đệ chúng con thân tâm thường được an lạc,
            tậc bệnh tiêu trừ, xa lìa khổ ác, cung hết thảy chúng sanh chư đạo
            bồ đề trang nghiêm một thời đồng chứng Vô Thương Chánh Đẳng Chánh
            Giác. (C)
          </Text>
          <Text style={styles.lyricTitle}>Quán Tưởng {"\n"}</Text>
          <Text style={styles.lyrics}>
            Phật, chúng sanh: tánh thường rỗng lặng. {"\n"}
            Ðạo cảm thông không thể nghĩ bàn. {"\n"}
            Lưới đế châu ví tựa đạo tràng, {"\n"}
            Mười phương Phật bảo, hào quang sáng ngời, {"\n"}
            Trước bảo tọa thân con ảnh hiện, {"\n"}
            Cúi đầu xin thệ nguyện quy y. (C) {"\n"}
          </Text>
          <Text style={styles.note}>
            Đứng dậy cắm hương lên lư {"\n"}
            Vị chủ lễ chấp tay đứng thẳng và niệm
          </Text>
          <Text style={styles.lyricTitle}>Đảnh Lể {"\n"}</Text>
          <Text style={styles.lyrics}>
            Chí tâm đảnh lễ: {"\n"}
            Nam mô tận hư không, biến pháp giới, quá, hiện, vị lai thập phương
            chư Phật, Tôn Pháp, Hiền Thánh Tăng thường trú Tam Bảo. (C) {"\n"}
            {"\n"}
            Chí tâm đảnh lễ: {"\n"}
            Nam mô Ta-bà Giáo chủ Ðiều ngự Bổn Sư Thích-Ca-Mâu-Ni Phật, Ðương
            lai hạ sanh Di-Lặc Tôn Phật, Ðại Trí Văn-Thù-Sư-Lợi Bồ-tát, Ðại Hạnh
            Phổ Hiền Bồ-tát, Hộ Pháp Chư Tôn Bồ-tát, Linh Sơn hội thượng Phật
            Bồ-tát. (C) {"\n"}
            {"\n"}
            Chí tâm đảnh lễ: {"\n"}
            Nam mô Tây Phương Cực Lạc Thế Giới Ðại Từ Ðại Bi A-Di-Ðà Phật, Ðại
            Bi Quán Thế Âm Bồ-tát, Ðại Thế Chí Bồ-tát, Ðại nguyện Ðịa Tạng Vương
            Bồ-tát, Thanh Tịnh Ðại Hải chúng Bồ-tát. (C) {"\n"}
          </Text>
        </View>
      );
    } else if (this.props.index == 2) {
      return (
        <Text style={styles.lyrics}>
          Đệ tử kính lạy Đức Phật Thích Ca, {"\n"}
          Phật A Di Đà, {"\n"}
          Thập phương chư Phật, {"\n"}
          Vô lượng Phật Pháp, {"\n"}
          Cùng Thánh Hiền Tăng, (C){"\n"}
          {"\n"}
          Đệ tử lâu đời lâu kiếp, {"\n"}
          Nghiệp chướng nặng nề, {"\n"}
          Tham giận kiêu căng, {"\n"}
          Si mê lầm lạc, {"\n"}
          Ngày nay nhờ Phật, {"\n"}
          Biết sự lỗi lầm, {"\n"}
          Thành tâm sám hối, (C){"\n"}
          Thề tránh điều dữ, {"\n"}
          Nguyện làm việc lành, {"\n"}
          Ngửa trông ơn Phật, {"\n"}
          Từ bi gia hộ {"\n"}
          Thân không tật bệnh, {"\n"}
          Tâm không phiền não, {"\n"}
          Hằng ngày an vui tu tập, {"\n"}
          Phép Phật nhiệm mầu, {"\n"}
          Để mau ra khỏi luân hồi, {"\n"}
          Minh tâm kiến tánh, {"\n"}
          Trí tuệ sáng suốt, {"\n"}
          Thần thông tự tại, {"\n"}
          Đặng cứu độ các bậc tôn trưởng, {"\n"}
          Cha mẹ anh em, {"\n"}
          Thân bằng quyến thuộc, {"\n"}
          Cùng tất cả chúng sinh, {"\n"}
          Đồng thành Phật đạo. (C) {"\n"}
        </Text>
      );
    } else if (this.props.index == 3) {
      return (
        <Text style={styles.lyrics}>
          Nam Mô Bổn Sư Thích Ca Mâu Ni Phật (3x-C) {"\n"}
          {"\n"}
          Nam Mô A Di Đà Phật (3x-C) {"\n"}
          {"\n"}
          Nam Mô Đương Lai Hạ Sanh Di Lặc Tôn Phật (3x-C) {"\n"}
          {"\n"}
          Nam Mô Đại Trí Văn Thù Sư Lợi Bồ Tát (3x-C) {"\n"}
          {"\n"}
          Nam Mô Ðại Hạnh Phổ Hiền Bồ Tát (3x-C) {"\n"}
          {"\n"}
          Nam Mô Đại Bi Quán Thế Âm Bồ Tát (3x-C) {"\n"}
          {"\n"}
          Nam mô Linh Sơn Hội Thượng Phật Bồ Tát (3x-C) {"\n"}
          {"\n"}
        </Text>
      );
    } else if (this.props.index == 4) {
      return (
        <Text style={styles.lyrics}>
          Chúng sanh vô số lượng, thệ nguyện đều độ khắp {"\n"}
          Phiền não không cùng tận, thệ nguyện đều dứt sạch {"\n"}
          Pháp môn không kể xiết, thệ nguyện đều tu học {"\n"}
          Phật Đạo không gì hơn, thệ nguyện được viên thành. (C){"\n"}
        </Text>
      );
    } else if (this.props.index == 5) {
      return (
        <Text style={styles.lyrics}>
          Tự quy y Phật, xin nguyện chúng sanh, {"\n"}
          thể theo đạo cả, phát lòng vô thượng. (C){"\n"}
          {"\n"}
          Tự quy y Pháp, xin nguyện chúng sanh, {"\n"}
          thấu rõ Kinh Tạng, trí tuệ như biển. (C){"\n"}
          {"\n"}
          Tự quy y Tăng, xin nguyện chúng sanh, {"\n"}
          thống lý đại chúng, hết thảy không ngại. (C){"\n"}
          {"\n"}
        </Text>
      );
    } else if (this.props.index == 6) {
      return (
        <Text style={styles.lyrics}>
          Nguyện đem công đức này,{"\n"}
          Hướng về khắp tất cả,{"\n"}
          Đệ tử và chúng sanh,{"\n"}
          Đều trọn thành Phật đạo. (C){"\n"}
        </Text>
      );
    } else if (this.props.index == 7) {
      return (
        <Text style={styles.lyrics}>
          Lạy Phật con xin Sám hối. {"\n"}
          Con đã quay về Đài sen{"\n"}
          Lạy Phật con xin Sám hối. {"\n"}
          Con đã thấm nhuần Ánh Dương{"\n"}
          {"\n"}
          Con đã thấy kiếp chúng sinh. {"\n"}
          Khổ đau trong muôn lỗi lầm{"\n"}
          Hoà với nước mắt u-sầu. {"\n"}
          Trọn đời sống kiếp thương đau{"\n"}
          {"\n"}
          Cầu xin cho con Ánh sáng. {"\n"}
          Ngời soi nơi nơi mê mờ{"\n"}
          Trần gian vui trong Ánh Đạo. {"\n"}
          Cho đời vơi bớt sầu đau{"\n"}
          {"\n"}
          Cầu xin cho con Ánh Sáng{"\n"}
          Ngời soi nơi nơi mê mờ{"\n"}
          Trần gian vui trong Ánh Đạo. {"\n"}
          Cho đời người bớt sầu đau{"\n"}
          {"\n"}
          Lạy Phật con xin Sám hối{"\n"}
          Con đã quay về Đài sen. {"\n"}
          Lạy Phật con xin Sám hối.{"\n"}
          Con đã thấm nhuần Ánh Dương {"\n"}
        </Text>
      );
    }
  }
}

export default PrayerList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%"
  },
  lyrics: {
    fontSize: 19,
    width: "90%",
    color: "rgba(0,0,0,1)",
    paddingBottom: 30
  },
  lyricTitle: {
    fontSize: 26,
    color: "rgba(0,100,0,1)"
  },
  note: {
    fontSize: 14,
    color: "rgba(0,0,0,.6)",
    textAlign: "center",
    paddingBottom: 30
  }
});
