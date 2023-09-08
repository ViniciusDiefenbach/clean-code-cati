import React from "react";
import { Text } from "react-native";

type TextDataProps = {
  createdAt: string;
  style?: object;
};

export default function TextDate({ createdAt, style }: TextDataProps) {
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
