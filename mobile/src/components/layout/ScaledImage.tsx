import React from "react";
import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Close from "./Close";
import ImageViewer from "react-native-image-zoom-viewer";

const { width } = Dimensions.get("window");

type ScaledImageProps = {
  uri: string;
  style?: object;
  widthScale?: number;
};

export default function ScaledImage({
  uri,
  style,
  widthScale: providedScale = 1,
}: ScaledImageProps) {
  const [proportion, setProportion] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  Image.getSize(uri, (width, height) => setProportion(height / width));

  return (
    <View>
      <Modal visible={modalVisible} style={styles.modal}>
        <View style={styles.modalContainer}>
          <Close onPress={() => setModalVisible(false)} />
          <ImageViewer
            useNativeDriver
            enableSwipeDown
            onCancel={() => setModalVisible(false)}
            imageUrls={[{ url: uri }]}
          />
        </View>
      </Modal>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <Image
          source={{ uri }}
          style={[style, { height: proportion * width * providedScale }]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  imageContainer: {
    justifyContent: "center",
    flex: 1,
  },
});
