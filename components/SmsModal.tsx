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
  smsModalVisibility: boolean;
  setSmsModalVisibility: any;
  closeModal: any;
}
const SmsModal = ({
  closeModal,
  setSmsModalVisibility,
  smsModalVisibility,
}: modalProp) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={smsModalVisibility}
      onRequestClose={() => {
        setSmsModalVisibility((prev: boolean) => !prev);
      }}
    >
      <Pressable style={styles.centeredView} onPress={() => closeModal()}>
        <View style={styles.topCont}></View>
        <View style={styles.modalView}>
          <View style={styles.headerCont}>
            <View style={styles.headerTextCont}>
              <Text style={styles.text}>Send sms to Asare Gideon</Text>
            </View>
          </View>
          <View>
            <TextInput
              style={styles.input}
              textAlignVertical="top"
              placeholder="Enter Amount here"
              multiline
            />
            <TouchableOpacity style={styles.payBtn}>
              <Text style={styles.btnText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    height: 100,
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
    marginBottom: 5,
    marginLeft: -2,
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
export default SmsModal;
