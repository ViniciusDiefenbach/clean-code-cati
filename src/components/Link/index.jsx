import { Text, Linking } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function Link ({ uri }) {
  const onPress = async () => await Linking.openURL(`${uri}`)

  return (
      <Text style={styles.link} onPress={onPress}>
        {uri}
      </Text>
  )
}
