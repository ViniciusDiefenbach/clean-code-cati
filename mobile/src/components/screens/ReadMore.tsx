import { Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Button from "../layout/Button";

export default function ReadMore({ navigation }) {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>Saiba mais</Text>
      <Text style={styles.subtitle}>O que é?</Text>
      <Text style={styles.paragraph}>
        O aplicativo tem como objetivo auxiliar alunos através de um aplicativo
        mobile com vários manuais e informações importantes para as aulas.
      </Text>
      <Text style={styles.paragraph}>
        O projeto foi desenvolvido por:{" "}
        <Text style={styles.strong}>Vinícius Diefenbach</Text> e orientado pelo
        por:{" "}
        <Text style={styles.strong}>Diego Alessandro Pereira dos Santos</Text> e{" "}
        <Text style={styles.strong}>Cassiano da Silva Souza</Text>.
      </Text>
      <Text style={styles.subtitle}>Tecnologias</Text>
      <Text style={styles.paragraph}>
        O aplicativo foi desenvolvido utilizando as seguintes tecnologias:
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.strong}>React Native</Text> - Framework para
        desenvolvimento de aplicações mobile.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.strong}>Node.js</Text> - Plataforma para execução de
        código JavaScript no backend.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.strong}>Express</Text> - Framework para
        desenvolvimento de aplicações web em Node.js.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.strong}>Prisma</Text> - ORM para Node.js.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.strong}>MySQL</Text> - Banco de dados relacional.
      </Text>
      <Text style={styles.subtitle}>Como utilizar</Text>
      <Text style={styles.paragraph}>
        O aplicativo tem um funcionamento muito simples, basta navegar pelas
        telas através do menu inferior. Na área de manuais, será exibida uma
        lista de manuais disponíveis, ao clicar em um manual, será exibido o
        conteúdo do mesmo. Na área de Horários, será exibida uma lista com os
        horários de cada turma.
      </Text>
      <Text style={styles.subtitle}>Como contribuir</Text>
      <Text style={styles.paragraph}>
        Caso queira contribuir com o projeto, qualquer bug ou sugestão de
        melhoria pode ser reportado para a equipe da{" "}
        <Text style={styles.strong}>COTIN</Text> (responsável pelo projeto).
      </Text>
      <Button style={{ marginTop: 32 }} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 32,
    textAlign: "center",
    margin: 6,
  },
  paragraph: {
    fontSize: 20,
    textAlign: "center",
  },
  strong: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
