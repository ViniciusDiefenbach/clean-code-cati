import { Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function Button ({ children, style, onPress }) {
  return (
    <Pressable
    style={[styles.button, style]}
    onPress={onPress}
    >
        {children}
    </Pressable>
  )
}
