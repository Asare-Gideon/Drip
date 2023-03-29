import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  Zocial,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppSelector } from "../app/reduxHooks/hooks";
import { Colors, Sizes } from "../constants/Layout";
import { MainNavParams } from "../types";
import CartsNav from "./CartsNav";
import CategoryNav from "./categoryNav";
import HomeNav from "./HomeNav";
import ProfileNav from "./ProfileNav";
import wishlistNav from "./wishlistNav";

const Tab = createBottomTabNavigator<MainNavParams>();

const MainNav = () => {
  const nav = useAppSelector((state) => state.bottomNav.value);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        title: "",
        tabBarStyle: {
          elevation: 4,
          borderTopWidth: 0,
          backgroundColor: Colors.white,
          height: nav ? 0 : 60,
          paddingTop: 5,
          position: "absolute",
          width: Sizes.width * 0.9,
          bottom: 20,
          left: (Sizes.width * 0.1) / 2,
          borderRadius: 10,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeNav}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.iconCont,
                focused && {
                  width: 75,
                  height: 75,
                  backgroundColor: Colors.primary,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 3,
                  borderRadius: 40,
                  elevation: 8,
                  left: -9,
                },
              ]}
            >
              <View style={{ marginBottom: 2, alignItems: "center" }}>
                <Entypo
                  size={focused ? 28 : 18}
                  name={"home"}
                  color={focused ? Colors.white : Colors.deepDarkGray}
                />
                {focused ? null : <Text style={[styles.text]}>Home</Text>}
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Category"
        component={CategoryNav}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconCont]}>
              <View
                style={[
                  styles.contentCont,
                  focused && {
                    width: 75,
                    height: 75,
                    backgroundColor: Colors.primary,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 3,
                    borderRadius: 40,
                    elevation: 8,
                  },
                ]}
              >
                <Zocial
                  size={focused ? 26 : 18}
                  name="dropbox"
                  color={focused ? Colors.white : Colors.deepDarkGray}
                />
                {focused ? null : (
                  <Text style={[styles.text, { width: 38 }]}>Manage</Text>
                )}
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={wishlistNav}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.iconCont,
                focused && {
                  width: 75,
                  height: 75,
                  backgroundColor: Colors.primary,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 3,
                  borderRadius: 40,
                  elevation: 8,
                },
              ]}
            >
              <View style={{ marginBottom: 2, alignItems: "center" }}>
                <MaterialCommunityIcons
                  size={focused ? 28 : 20}
                  name="hand-coin-outline"
                  color={focused ? Colors.white : Colors.deepDarkGray}
                />
                {focused ? null : <Text style={[styles.text]}>Sell</Text>}
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Carts"
        component={CartsNav}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconCont]}>
              <View
                style={[
                  styles.contentCont,
                  focused && {
                    width: 75,
                    height: 75,
                    backgroundColor: Colors.primary,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 3,
                    borderRadius: 40,
                    elevation: 8,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  size={focused ? 28 : 21}
                  color={focused ? Colors.white : Colors.deepDarkGray}
                  name="sale"
                />
                {focused ? null : <Text style={[styles.text]}>Sales</Text>}
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileNav}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconCont}>
              <View
                style={[
                  styles.contentCont,
                  focused && {
                    width: 75,
                    height: 75,
                    backgroundColor: Colors.primary,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 3,
                    borderRadius: 40,
                    elevation: 8,
                    right: -8,
                  },
                ]}
              >
                <FontAwesome5
                  size={focused ? 26 : 18}
                  color={focused ? Colors.white : Colors.deepDarkGray}
                  name="user-alt"
                />
                {focused ? null : (
                  <Text style={[styles.text, { width: 38 }]}>Account</Text>
                )}
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconCont: {
    paddingTop: 6,
  },
  badge: {
    position: "absolute",
    backgroundColor: "#ed554d",
    width: 19,
    height: 19,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 30,
    right: 0,
  },
  text: {
    fontSize: 10,
    marginBottom: -8,
    color: Colors.deepDarkGray,
  },
  contentCont: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    width: 35,
    height: 35,
    borderRadius: 4,
  },
});

export default MainNav;
