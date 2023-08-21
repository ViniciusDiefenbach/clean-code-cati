import React from 'react'
import Home from '../../screens/Home'
import Guides from '../../screens/Guides'
import Calendars from '../../screens/Calendars'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { calendarsOptions, guidesOptions, screenOptions, HomeOptions } from './options'

const Tab = createBottomTabNavigator()

export default function AppTab () {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
          <Tab.Screen name="Guides" component={Guides} options={guidesOptions} />
          <Tab.Screen name='Home' component={Home} options={HomeOptions} />
          <Tab.Screen name="Calendars" component={Calendars} options={calendarsOptions} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
