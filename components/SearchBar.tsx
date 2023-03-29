import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../constants/Layout";

export default function SearchBar() {
  return (
    <View style={styles.mainMain}>
      <TouchableOpacity style={styles.bellBtn}>
        <FontAwesome name="bell" color={Colors.primary} size={26} />
      </TouchableOpacity>
      <View style={styles.submain}>
        <FontAwesome name="search" size={21} color={Colors.primary} />
        <TextInput
          placeholder="What are you looking for?"
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bellBtn: {
    backgroundColor: Colors.warmWhite,
  },
  mainMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "center",
  },
  submain: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    width: "85%",
    borderRadius: 20,
    alignItems: "center",
    paddingLeft: 10,
    elevation: 1,
  },
  input: {
    paddingLeft: 8,
    paddingVertical: 8,
    width: "90%",
  },
});
