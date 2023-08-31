import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { header } from "../../../config/app-images";
import {
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_FONT_COLOR,
} from "../../../config/app-colors";

const { width } = Dimensions.get("window");

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeto Cati</Text>
      <Image source={header} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY_BACKGROUND_COLOR,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: SECONDARY_FONT_COLOR,
  },
  image: {
    height: width * 0.4 * (516 / 1542),
    width: width * 0.4,
  },
});
