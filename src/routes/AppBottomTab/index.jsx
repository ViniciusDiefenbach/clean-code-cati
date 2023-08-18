import React from 'react'
import Welcome from '../../screens/Welcome'
import Guides from '../../screens/Guides'
import Calendars from '../../screens/Calendars'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { calendarsOptions, guidesOptions, screenOptions, welcomeOptions } from './options'

const Tab = createBottomTabNavigator()

export default function AppBottomTab () {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Welcome' screenOptions={screenOptions}>
          <Tab.Screen name="Guides" component={Guides} options={guidesOptions} />
          <Tab.Screen name='Welcome' component={Welcome} options={welcomeOptions} />
          <Tab.Screen name="Calendars" component={Calendars} options={calendarsOptions} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
