import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SECONDARY_BACKGROUND_COLOR } from "../../../constants/app-colors";

type ButtonProps = {
  children: any;
  style?: any;
  onPress: () => void;
};

export default function Button({ children, style, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
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
