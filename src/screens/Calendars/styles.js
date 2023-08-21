import { Dimensions, StyleSheet } from 'react-native'
import { backgroundColor1 } from '../../../config/app-colors'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor1
  },
  contentContainer: {
    paddingVertical: 12,
    paddingHorizontal: width * 0.06,
    gap: 12
  },
  calendar: {
    gap: 6
  },
  image: {
    backgroundColor: 'black'
  }
})
