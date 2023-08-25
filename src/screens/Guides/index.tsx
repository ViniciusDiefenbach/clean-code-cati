import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { api } from "../../services/api";
import React from "react";
import Button from "../../components/Button";

export default function Guides({ navigation }) {
  const [data, setData] = React.useState([]);
  const getGuides = async () => {
    setData((await api.get("/guides")).data);
  };
  React.useEffect(() => {
    setInterval(() => {
      getGuides();
    }, 5 * 1000);
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
