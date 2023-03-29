import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { ProfileParams } from "../types";
import ProfileIndex from "../screens/profile/index/ProfileIndex";

const TransitionScreenOptions = {
  ...TransitionPresets.RevealFromBottomAndroid,
  headerShown: false,
};

const Stack = createStackNavigator<ProfileParams>();
const ProfileNav = () => {
  return (
    <Stack.Navigator
      screenOptions={TransitionScreenOptions}
      initialRouteName="ProfileIndex"
    >
      <Stack.Screen name="ProfileIndex" component={ProfileIndex} />
    </Stack.Navigator>
  );
};
export default ProfileNav;
