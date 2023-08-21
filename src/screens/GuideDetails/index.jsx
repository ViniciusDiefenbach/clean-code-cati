import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { api } from '../../services/api'
import { styles } from './styles'
import Button from '../../components/Button'
import Refs from '../../components/Refs'
import Date from '../../components/Date'

export default function GuideDetails ({ route, navigation }) {
  const id = route.params

  const [data, setData] = React.useState({})
  const getData = async () => {
    const data = (await api.get(`/guides/${id}`)).data
    setData(data)
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {data.title === undefined
        ? (
        <ActivityIndicator />
          )
        : (
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.briefDescription}</Text>
          <Date createdAt={data.createdAt} style={styles.date} />
          <Text style={styles.content}>{data.content}</Text>
          <Refs refs={data.GuideReferences} />
          <Button
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </Button>
        </View>
          )}
    </ScrollView>
  )
}
