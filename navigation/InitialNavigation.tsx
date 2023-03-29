import { View, Text } from "react-native";
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { InitialParams } from "../types";
import Onboarding from "../screens/authentication/onboarding/Onboarding";

const TransitionScreenOptions = {
  ...TransitionPresets.RevealFromBottomAndroid,
  headerShown: false,
};

const Stack = createStackNavigator<InitialParams>();
const InitialNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={TransitionScreenOptions}
      initialRouteName="OnboardingScreen"
    >
      <Stack.Screen name="OnboardingScreen" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default InitialNavigation;
