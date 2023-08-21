import { View, Text } from 'react-native'
import React from 'react'
import { apiServer } from '../../../config/api-server'
import ScaledImage from '../ScaledImage'
import Link from '../Link'

export default function Refs ({ refs }) {
  return (
        <View>
          {refs.map((item) => {
            return (
              <View key={item.id} style={{ marginVertical: 4 }}>
                {item.message ? <Text>{item.message}</Text> : null}
                {item.uriType === 'externalImage'
                  ? (
                  <ScaledImage uri={item.uri} style={{ borderRadius: 8 }} />
                    )
                  : null}
                {item.uriType === 'localImage'
                  ? (
                  <ScaledImage
                    uri={`${apiServer.url}/guides/${item.uri}`}
                    style={{ borderRadius: 8 }}LinkButton
                  />
                    )
                  : null}
                {item.uriType === 'link' ? <Link url={item.uri} /> : null}
              </View>
            )
          })}
        </View>
  )
}
