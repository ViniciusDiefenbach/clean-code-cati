import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../../screens/Welcome'
import ReadMore from '../../screens/ReadMore'
import { screenOptions } from './options'

const Stack = createNativeStackNavigator()

export default function HomeStack () {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={screenOptions}>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='ReadMore' component={ReadMore} />
    </Stack.Navigator>
  )
}
