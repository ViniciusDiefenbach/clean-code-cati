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
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";

const { width } = Dimensions.get("window");

export default function ScaledImage({ uri, style, widthScale = 1 }) {
  const [proportion, setProportion] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  Image.getSize(uri, (width, height) => setProportion(height / width));

  return (
    <View>
      <Modal visible={modalVisible} style={styles.modal}>
        <View style={styles.modalContainer}>
          <Close onPress={() => setModalVisible(false)} />
          <ReactNativeZoomableView
            maxZoom={1.5}
            minZoom={1}
            zoomStep={0.5}
            initialZoom={1}
            bindToBorders
            doubleTapZoomToCenter
            captureEvent
            style={styles.imageContainer}
          >
            <Image
              source={{ uri }}
              style={[{ height: proportion * width }, style]}
            />
          </ReactNativeZoomableView>
        </View>
      </Modal>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <Image source={{ uri }} style={[, style]} />
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
