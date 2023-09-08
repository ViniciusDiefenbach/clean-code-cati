import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_FONT_COLOR,
  TERTIARY_FONT_COLOR,
} from "../../../constants/app-colors";

export const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: SECONDARY_BACKGROUND_COLOR,
    borderTopColor: SECONDARY_BACKGROUND_COLOR,
    paddingTop: 4,
    paddingBottom: 4,
  },
  tabBarInactiveTintColor: TERTIARY_FONT_COLOR,
  tabBarActiveTintColor: SECONDARY_FONT_COLOR,
};

export const guideStackOptions = {
  title: "Manuais",
  tabBarIcon: ({ color, size }) => (
    <Feather name="book-open" size={size} color={color} />
  ),
};

export const homeStackOptions = {
  title: "Home",
  tabBarIcon: ({ color, size }) => (
    <Feather name="home" size={size} color={color} />
  ),
};

export const calendarOptions = {
  title: "Calendários",
  tabBarIcon: ({ color, size }) => (
    <Feather name="calendar" size={size} color={color} />
  ),
};
