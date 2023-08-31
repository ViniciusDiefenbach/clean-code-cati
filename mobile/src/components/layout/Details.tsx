import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ScaledImage from "./ScaledImage";
import Link from "./Link";

export default function Details({ details }) {
  return (
    <View>
      {details.map((item) => {
        return (
          <View key={item.id} style={styles.container}>
            {item.uriType === "PARAGRAPH" ? <Text>{item.content}</Text> : null}
            {item.uriType === "IMAGE" ? (
              <ScaledImage uri={item.content} style={styles.image} />
            ) : null}
            {item.uriType === "LINK" ? <Link uri={item.content} /> : null}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  image: {
    borderRadius: 8,
  },
});
