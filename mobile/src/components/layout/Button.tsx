import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SECONDARY_BACKGROUND_COLOR } from "../../../config/app-colors";

export default function Button({ children, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: SECONDARY_BACKGROUND_COLOR,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
