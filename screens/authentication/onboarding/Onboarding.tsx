import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors, Fonts, Sizes } from "../../../constants/Layout";
import images from "../../../constants/Images";
import InitialSwiper from "../../../components/InitialSwiper";
import { LinearGradient } from "expo-linear-gradient";
import { Fontisto } from "@expo/vector-icons";

const Onboarding = () => {
  return (
    <View style={styles.main}>
      <LinearGradient
        colors={[Colors.black, "transparent"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.5 }}
        style={styles.background}
      >
        <View style={styles.logoCont}>
          <Fontisto name="blood-drop" size={28} color={Colors.white} />
          <Text style={styles.logoText}>Drip Fashion</Text>
        </View>
      </LinearGradient>
      <ImageBackground source={images.initialBg} style={styles.bgImg}>
        {/* <View style={styles.topContent}></View> */}
        <View style={styles.bottomContent}>
          <View style={styles.headerTextCont}>
            <InitialSwiper
              text="Your appearance show your quality so give your best for your best fashion "
              title="Start Finding Your Version The Best Fashion Style"
            />
            <View style={styles.dotCont}>
              <View style={styles.dot}></View>
              <View
                style={[styles.dot, { backgroundColor: Colors.primary }]}
              ></View>
              <View style={styles.dot}></View>
            </View>
          </View>
          <TouchableOpacity style={styles.btnCont}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  logoCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    alignSelf: "center",
    marginLeft: -40,
  },
  logoText: {
    ...Fonts.style2,
    fontSize: 20,
    color: Colors.white,
    lineHeight: 30,
    marginLeft: 5,
    marginTop: 11,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Sizes.height - 300,
    zIndex: 99,
  },
  topContent: {
    backgroundColor: Colors.black,
    height: 100,
    width: Sizes.width,
    opacity: 0.5,
  },
  btnText: {
    ...Fonts.body3,
    color: Colors.white,
  },
  btnCont: {
    width: Sizes.width - 40,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    marginTop: 30,
    height: 45,
    borderRadius: 20,
  },
  dotCont: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: Colors.deepDarkGray,
    marginLeft: 5,
    marginRight: 5,
  },
  headerTextCont: {
    marginTop: 25,
  },
  bottomContent: {
    position: "absolute",
    backgroundColor: Colors.black,
    height: 245,
    width: Sizes.width,
    bottom: -130,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  bgImg: {
    height: Sizes.height - 130,
  },
  main: {
    width: Sizes.width,
    height: Sizes.height,
  },
});
export default Onboarding;
