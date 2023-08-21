import { Dimensions, Image, Modal, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Close from '../Close'
import { styles } from './styles'

const { width } = Dimensions.get('window')

export default function ScaledImage ({
  uri,
  style,
  widthScale = 1
}) {
  const [proportion, setProportion] = React.useState(0)
  const [modalVisible, setModalVisible] = React.useState(false)
  Image.getSize(uri, (width, height) => setProportion(height / width))

  return (
      <View>
        <Modal visible={modalVisible} style={styles.modal}>
          <View style={styles.modalContainer}>
            <Close
              onPress={() => setModalVisible(false)}
            />
            <View style={styles.imageContainer}>
              <Image
                source={{ uri }}
                style={[
                  { height: proportion * width },
                  style
                ]}
              />
            </View>
          </View>

        </Modal>
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(true)}
        >
          <Image
            source={{ uri }}
            style={[
              { height: proportion * width * widthScale },
              style
            ]}
          />
        </TouchableWithoutFeedback>
      </View>
  )
}
