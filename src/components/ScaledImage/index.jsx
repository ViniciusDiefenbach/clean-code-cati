import { Dimensions, Image } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window')

export default function ScaledImage ({
  uri,
  style,
  widthScale = 1
}) {
  const [proportion, setProportion] = React.useState(0)
  Image.getSize(uri, (width, height) => setProportion(height / width))
  return (
      <Image
        source={{ uri }}
        style={[
          {
            height: proportion * width * widthScale
          },
          style
        ]}
      />
  )
}
