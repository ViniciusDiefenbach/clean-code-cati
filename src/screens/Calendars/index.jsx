import { Text, ScrollView, ActivityIndicator, View } from 'react-native'
import { styles } from './styles'
import React from 'react'
import ScaledImage from '../../components/ScaledImage'
import { apiServer } from '../../../config/api-server'
import { api } from '../../services/api'

export default function Calendars () {
  const [data, setData] = React.useState([])
  const getData = async () => {
    const data = (await api.get('/schedules')).data // Trocar por Calendars futuramente
    setData(data)
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {!data
        ? (
        <ActivityIndicator />
          )
        : (
            data.map((item) => (
          <View key={item.id} style={styles.calendar}>
            <Text>{item.title}</Text>
            <ScaledImage
              uri={`${apiServer.url}/schedules/${item.content}`}
              style={styles.image}
              widthScale={0.88}
            />
          </View>
            )))}
    </ScrollView>
  )
}
