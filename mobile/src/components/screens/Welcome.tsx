import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../layout/Button";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá Estudante! 👋</Text>
      <Text style={styles.paragraph}>Seja muito bem-vindo à</Text>
      <Text style={styles.strong}>Central de Atendimento de TI</Text>
      <Text style={styles.paragraph}>
        Projeto desenvolvido pela equipe da COTIN de Sapiranga
      </Text>
      <Text style={styles.paragraph}>
        Caso tenha interesse em saber um pouco mais sobre o Projeto CATI, clique
        no botão abaixo
      </Text>
      <Button onPress={() => navigation.navigate("ReadMore")}>
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 64,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  paragraph: {
    fontSize: 20,
    textAlign: "center",
  },
  strong: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
