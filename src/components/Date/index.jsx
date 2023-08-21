import { Text } from 'react-native'
import React from 'react'

export default function DateRender ({ createdAt, style }) {
  return (
    <Text style={style}>
      Criado em:{' '}
      {new Date(createdAt)
        .toISOString()
        .replaceAll('-', '/')
        .split('T')[0]
        .split('/')
        .reverse()
        .join('/')}
    </Text>
  )
}
