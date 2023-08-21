import { View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'

export default function Close ({ onPress, style }) {
  return (
    <View style={styles.container}>
      <Feather name='x-square' size={32} color='white' onPress={onPress} />
    </View>
  )
}
