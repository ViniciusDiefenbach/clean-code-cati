import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Guides from '../../screens/Guides'
import GuideDetails from '../../screens/GuideDetails'
import { screenOptions } from './options'

const Stack = createNativeStackNavigator()

export default function GuideStack () {
  return (
    <Stack.Navigator initialRouteName='Guides' screenOptions={screenOptions}>
        <Stack.Screen name="Guides" component={Guides} />
        <Stack.Screen name="GuideDetails" component={GuideDetails} />
    </Stack.Navigator>
  )
}
