import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import images from "../constants/Images";
import { Colors, Fonts, Sizes } from "../constants/Layout";

interface swiperProp {
  image: any;
  title: string;
  text: string;
}
const InitialSwiper = ({ image, title, text }: swiperProp) => {
  const height = Dimensions.get("window").height;
  const smallScreen = height < 660;

  return (
    <View>
      <View style={styles.imageCont}>
        <Image source={image} style={styles.image} />
      </View>
      <View>
        <Text
          style={[
            styles.headerText,
            { fontSize: smallScreen ? 20 : 24, lineHeight: 30 },
          ]}
        >
          {title}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    ...Fonts.body3,
    lineHeight: 20,
    textAlign: "center",
    fontSize: 15,
    width: Sizes.width - 40,
    alignSelf: "center",
    marginTop: 10,
  },
  headerText: {
    ...Fonts.h1,
    fontSize: 24,
    width: Sizes.width - 50,
    alignSelf: "center",
    color: Colors.darkgray,
    textAlign: "center",
  },
  imageCont: {
    width: Sizes.width,
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: Sizes.width - 150,
    height: Sizes.width - 150,
  },
});
export default InitialSwiper;
