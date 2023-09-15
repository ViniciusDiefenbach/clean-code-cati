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
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_FONT_COLOR,
} from "../../../constants/app-colors";

export default function Guide({ navigation }) {
  const [data, setData] = React.useState([]);

  api.get("/guide").then((result) => setData(result.data));

  React.useEffect(() => {
    setInterval(async () => {
      const result = await api.get("/guide");
      setData(result.data);
    }, 30000);
  }, []);

  return (
    <View style={styles.container}>
      {!data[0] ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          color={SECONDARY_BACKGROUND_COLOR}
          size={"large"}
        />
      ) : (
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Button
              onPress={() => navigation.navigate("GuideDetails", item.id)}
              style={styles.button}
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
  contentContainer: {
    padding: 30,
    gap: 8,
  },
  button: {
    marginBottom: 4,
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
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
  },
});
