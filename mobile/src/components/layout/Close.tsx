import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

type CloseProps = {
  onPress: () => void;
  style?: Object;
};

export default function Close({ onPress, style }: CloseProps) {
  return (
    <View style={styles.container}>
      <Feather name="x-square" size={32} color="white" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    alignItems: "flex-end",
    margin: 12,
  },
});
