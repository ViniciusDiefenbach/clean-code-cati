import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { header } from '../../../config/app-images'

export default function Header () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeto Cati</Text>
      <Image source={header} style={styles.image} />
    </View>
  )
}
