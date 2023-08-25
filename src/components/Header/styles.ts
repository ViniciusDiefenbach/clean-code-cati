import { Dimensions, StyleSheet } from 'react-native'
import { backgroundColor2, fontColor2 } from '../../../config/app-colors'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: fontColor2
  },
  image: {
    height: width * 0.4 * (516 / 1542),
    width: width * 0.4
  }
})
