import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors, Fonts, Sizes } from "../constants/Layout";

interface modalProp {
  pickedModalVisibility: boolean;
  setPickedModalVisibility: any;
  closeModal: any;
}
const PickedupInputModal = ({
  pickedModalVisibility,
  setPickedModalVisibility,
  closeModal,
}: modalProp) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={pickedModalVisibility}
      onRequestClose={() => {
        setPickedModalVisibility((prev: boolean) => !prev);
      }}
    >
      <Pressable style={styles.centeredView} onPress={() => closeModal()}>
        <View style={styles.topCont}></View>
        <View style={styles.modalView}>
          <View style={styles.headerCont}>
            <View style={styles.headerTextCont}>
              <Text style={styles.text}>Toltal price</Text>
              <Text style={styles.text}>GH500</Text>
            </View>
          </View>
          <Text style={styles.dateText}>Picking up by??</Text>
          <View>
            <View style={styles.inputCont}>
              <Text style={styles.lable}>Person's Name*</Text>
              <TextInput style={styles.input} placeholder="Enter name" />
            </View>
            <View style={styles.inputCont}>
              <Text style={styles.lable}>Person's Phone*</Text>
              <TextInput style={styles.input} placeholder="Enter name" />
            </View>
            <TouchableOpacity style={styles.payBtn}>
              <Text style={styles.btnText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputCont: {
    marginBottom: 15,
  },
  lable: {
    ...Fonts.body3,
    fontSize: 14,
    marginBottom: 7,
    color: Colors.deepDarkGray,
  },
  btnText: {
    color: Colors.white,
    ...Fonts.body4,
    fontSize: 14,
  },
  payBtn: {
    width: Sizes.width * 0.84,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    paddingVertical: 9,
    marginTop: 30,
    borderRadius: 8,
  },
  input: {
    width: Sizes.width * 0.84,
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: Colors.deepDarkGray,
  },
  text: {
    ...Fonts.body4,
    fontSize: 14,
    color: Colors.deepDarkGray,
  },
  dateText: {
    ...Fonts.h4,
    fontSize: 16,
    color: Colors.deepDarkGray,
    marginBottom: 10,
    marginLeft: -2,
    marginTop: 10,
  },
  headerTextCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topCont: {
    backgroundColor: Colors.black,
    flex: 1,
    width: Sizes.width,
    marginBottom: -40,
    opacity: 0.4,
    marginTop: -200,
  },
  headerCont: {
    backgroundColor: Colors.white,
    padding: 10,
    width: Sizes.width * 0.84,
    alignSelf: "center",
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: Colors.warmWhite,
    borderRadius: 10,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: Sizes.width,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
export default PickedupInputModal;
