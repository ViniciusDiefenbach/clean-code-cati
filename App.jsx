import React from 'react'
import { StatusBar, View } from 'react-native'
import { styles } from './global'
import Header from './src/components/Header'
import AppTab from './src/routes/AppTab'

export default function App () {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <AppTab />
    </View>
  )
}
