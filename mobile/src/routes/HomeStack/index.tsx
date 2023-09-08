import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOptions } from "./options";
import Welcome from "../../components/screens/Welcome";
import ReadMore from "../../components/screens/ReadMore";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={screenOptions}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="ReadMore" component={ReadMore} />
    </Stack.Navigator>
  );
}
