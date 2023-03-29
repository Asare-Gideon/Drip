import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { NativeStackNavigatorProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Fonts } from "../constants/Layout";

interface headerProp {
  navigation: any;
  title: string;
  Icon?: any;
  iconName?: string;
}

const Header = ({ navigation, title, Icon, iconName }: headerProp) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.headerBtn}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" color={Colors.deepDarkGray} size={25} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity style={styles.headerBtn2}>
        {Icon && <Icon name={iconName} color={Colors.deepDarkGray} size={25} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  headerText: {
    textAlign: "center",
    ...Fonts.h2,
    fontSize: 18,
    color: Colors.deepDarkGray,
    marginTop: 2,
  },
  headerBtn: {
    position: "absolute",
    left: 20,
    paddingBottom: 0,
  },
  headerBtn2: {
    position: "absolute",
    right: 20,
    paddingBottom: 0,
  },
});
export default Header;
