import React from 'react'
import headerImage from '../../../assets/header.png'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

export default function Header () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeto Cati</Text>
      <Image source={headerImage} style={styles.image} />
    </View>
  )
}
