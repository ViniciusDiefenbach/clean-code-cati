import { Dimensions, StyleSheet } from 'react-native'
import { backgroundColor1, fontColor2 } from '../../../config/app-colors'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor1
  },
  contentContainer: {
    paddingVertical: 10,
    padding: width * 0.06
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 20
  },
  date: {
    marginBottom: 10
  },
  content: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'justify'
  },
  button: {
    marginTop: 10
  },
  buttonText: {
    color: fontColor2,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
