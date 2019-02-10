import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const NextButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Ionicons name="md-arrow-round-forward" color="#fff" size={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  button: {
    backgroundColor: "rgb(0, 136, 77)",
    height: 56,
    width: 56,
    borderWidth: 0,
    borderRadius: 50,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 20
  }
});
