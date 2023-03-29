import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type InitialParams = {
  LoginScreen: undefined;
  AlertMessageScreen: undefined;
  OnboardingScreen: undefined;
  PolicyAndPrivacy: undefined;
};

export type initialNavProps = NativeStackScreenProps<InitialParams>;

export type MainNavParams = {
  HomeScreen: undefined;
  Wishlist: undefined;
  Category: undefined;
  Profile: undefined;
  Carts: undefined;
};

export type ProfileParams = {
  ProfileIndex: undefined;
};
