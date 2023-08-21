import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { api } from '../../services/api'
import React from 'react'
import Button from '../../components/Button'

export default function Guides ({ navigation }) {
  const [guides, setGuides] = React.useState([])
  const getGuides = async () => {
    const data = (await api.get('/guides')).data
    setGuides(data)
  }
  React.useEffect(() => {
    getGuides()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {!guides
        ? (
        <ActivityIndicator />
          )
        : (
        <FlatList
          contentContainerStyle={{
            padding: 16,
            gap: 8
          }}
          data={guides}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Button
              onPress={() => navigation.navigate('GuideDetails', item.id)}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.briefDescription}</Text>
            </Button>
          )}
        />
          )}
    </View>
  )
}
