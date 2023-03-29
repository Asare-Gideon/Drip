import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import InitialNavigation from "./navigation/InitialNavigation";
import { useState } from "react";
import MainNav from "./navigation/MainNav";
import { useAppSelector } from "./app/reduxHooks/hooks";

export default function Main() {
  const isLoadingComplete = useCachedResources();
  const isLogin = useAppSelector((state) => state.loginSeter.value);

  if (!isLoadingComplete) {
    return null;
  } else {
    if (isLogin) {
      return (
        <NavigationContainer>
          <SafeAreaProvider>
            <MainNav />
            <StatusBar />
          </SafeAreaProvider>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <SafeAreaProvider>
            <InitialNavigation />
            <StatusBar />
          </SafeAreaProvider>
        </NavigationContainer>
      );
    }
  }
}
