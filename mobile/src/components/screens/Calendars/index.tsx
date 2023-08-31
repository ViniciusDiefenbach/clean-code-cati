import React from "react";
import {
  Text,
  ScrollView,
  ActivityIndicator,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import ScaledImage from "../../layout/ScaledImage";
import { api } from "../../../services/api";
import { PRIMARY_BACKGROUND_COLOR } from "../../../../config/app-colors";

const { width } = Dimensions.get("window");

export default function Calendars() {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const data = (await api.get("/calendars")).data;
    setData(data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {!data ? (
        <ActivityIndicator />
      ) : (
        data.map((item) => (
          <View key={item.id} style={styles.calendar}>
            <Text>{item.class}</Text>
            <ScaledImage
              uri={item.uri}
              style={styles.image}
              widthScale={0.88}
            />
          </View>
        ))
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
    paddingVertical: 12,
    paddingHorizontal: width * 0.06,
    gap: 12,
  },
  calendar: {
    gap: 6,
  },
  image: {
    backgroundColor: "black",
  },
});
