import React from "react";
import { Text, Linking, StyleSheet } from "react-native";

export default function Link({ uri }) {
  const onPress = async () => await Linking.openURL(`${uri}`);

  return (
    <Text style={styles.link} onPress={onPress}>
      {uri}
    </Text>
  );
}

const styles = StyleSheet.create({
  link: { color: "blue" },
});
