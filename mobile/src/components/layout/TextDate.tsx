import React from "react";
import { Text } from "react-native";

export default function TextDate({ createdAt, style }) {
  return (
    <Text style={[style]}>
      Criado em:{" "}
      {new Date(createdAt)
        .toISOString()
        .replaceAll("-", "/")
        .split("T")[0]
        .split("/")
        .reverse()
        .join("/")}
    </Text>
  );
}
