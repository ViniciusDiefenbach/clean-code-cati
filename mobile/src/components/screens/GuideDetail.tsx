import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  PRIMARY_BACKGROUND_COLOR,
  SECONDARY_FONT_COLOR,
} from "../../../constants/app-colors";
import { api } from "../../services/api";
import TextDate from "../layout/TextDate";
import Button from "../layout/Button";
import Details from "../layout/Details";

const { width } = Dimensions.get("window");

export type GuideDetails = {
  id?: string;
  format?: string;
  content?: string;
};

type GuideIdentifier = {
  id?: string;
  title?: string;
  description?: string;
  created_at?: string;
  guide_details?: Array<GuideDetails>;
};

export default function GuideDetail({ route, navigation }) {
  const id = route.params;

  const [data, setData] = React.useState<GuideIdentifier>({});
  const getData = async () => {
    const data = (await api.get(`/guides/${id}`)).data;
    setData(data);
  };

  React.useEffect(() => {
    setInterval(() => {
      getData();
      console.log(data);
    }, 10 * 1000);
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {data.title === undefined ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <TextDate createdAt={data.created_at} style={styles.date} />
          {data.guide_details ? <Details details={data.guide_details} /> : null}
          <Button style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Voltar</Text>
          </Button>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BACKGROUND_COLOR,
  },
  contentContainer: {
    paddingVertical: 10,
    padding: width * 0.06,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    fontSize: 20,
  },
  date: {
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "justify",
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    color: SECONDARY_FONT_COLOR,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
