import { StyleSheet } from 'react-native'
import { backgroundColor1, fontColor2 } from '../../../config/app-colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor1,
    flex: 1
  },
  title: {
    color: fontColor2,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description: {
    color: fontColor2,
    fontSize: 16,
    textAlign: 'center'
  }
})
