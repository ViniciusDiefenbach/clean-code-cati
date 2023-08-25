import React from "react";
import HomeStack from "../HomeStack";
import Calendars from "../../screens/Calendars";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  calendarOptions,
  guideStackOptions,
  screenOptions,
  homeStackOptions,
} from "./options";
import GuideStack from "../GuideStack";

const Tab = createBottomTabNavigator();

export default function AppTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeStack" screenOptions={screenOptions}>
        <Tab.Screen
          name="GuideStack"
          component={GuideStack}
          options={guideStackOptions}
        />
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={homeStackOptions}
        />
        <Tab.Screen
          name="Calendars"
          component={Calendars}
          options={calendarOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
