import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Button from "../layout/Button";
import { api } from "../../services/api";
import {
  PRIMARY_BACKGROUND_COLOR,
  SECONDARY_FONT_COLOR,
} from "../../../constants/app-colors";

export default function Guide({ navigation }) {
  const [data, setData] = React.useState([]);
  const getGuides = async () => {
    console.log("inicio");
    setData((await api.get("/guide")).data);
    console.log("fim");
  };
  getGuides();
  React.useEffect(() => {
    setInterval(() => {
      getGuides();
    }, 10 * 1000);
  });

  return (
    <View style={{ flex: 1 }}>
      {!data ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          contentContainerStyle={{
            padding: 16,
            gap: 8,
          }}
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Button
              onPress={() => navigation.navigate("GuideDetails", item.id)}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </Button>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_BACKGROUND_COLOR,
    flex: 1,
  },
  title: {
    color: SECONDARY_FONT_COLOR,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    color: SECONDARY_FONT_COLOR,
    fontSize: 16,
    textAlign: "center",
  },
});
