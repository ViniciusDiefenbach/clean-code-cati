import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  backgroundColor2,
  fontColor2,
  fontColor3,
} from "../../../config/app-colors";

export const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: backgroundColor2,
    borderTopColor: backgroundColor2,
    paddingTop: 4,
    paddingBottom: 4,
  },
  tabBarInactiveTintColor: fontColor3,
  tabBarActiveTintColor: fontColor2,
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
  title: "Manuais",
  tabBarIcon: ({ color, size }) => (
    <Feather name="calendar" size={size} color={color} />
  ),
};
