import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ScaledImage from "./ScaledImage";
import Link from "./Link";
import { GuideDetails } from "../screens/GuideDetail";

type DetailsProps = {
  details: Array<GuideDetails>;
};

export default function Details({ details }: DetailsProps) {
  return (
    <View>
      {details.map((item) => {
        return (
          <View key={item.id} style={styles.container}>
            {item.format === "PARAGRAPH" ? <Text>{item.content}</Text> : null}
            {item.format === "IMAGE" ? (
              <ScaledImage uri={item.content} style={styles.image} />
            ) : null}
            {item.format === "LINK" ? <Link uri={item.content} /> : null}
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
