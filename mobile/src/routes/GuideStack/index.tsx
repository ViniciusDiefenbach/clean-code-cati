import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOptions } from "./options";
import Guide from "../../components/screens/Guide";
import GuideDetail from "../../components/screens/GuideDetail";

const Stack = createNativeStackNavigator();

export default function GuideStack() {
  return (
    <Stack.Navigator initialRouteName="Guides" screenOptions={screenOptions}>
      <Stack.Screen name="Guides" component={Guide} />
      <Stack.Screen name="GuideDetails" component={GuideDetail} />
    </Stack.Navigator>
  );
}
