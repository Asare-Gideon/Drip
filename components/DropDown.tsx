import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Colors } from "../constants/Layout";

interface dropDownProp {
  data: { label: string; value: string }[];
  label?: boolean;
  labelText?: string;
  labelColor?: string;
  search?: boolean;
  iconColor?: string;
  Icon?: any;
  iconName?: string;
  iconSize?: number;
  placeholder: string;
  color?: string;
  style?: any;
  focusColor?: string;
  containerStyles?: any;
}

const DropDown = ({
  focusColor,
  style,
  Icon,
  placeholder,
  iconSize,
  iconName,
  color,
  iconColor,
  search,
  data,
  label,
  labelText,
  labelColor,
  containerStyles,
}: dropDownProp) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text
          style={[
            styles.label,
            isFocus && {
              color: labelColor ? labelColor : "blue",
              backgroundColor: Colors.warmWhite,
            },
          ]}
        >
          {label && labelText ? labelText : "labelTex"}
        </Text>
      );
    }
    return null;
  };
  return (
    <View style={styles.container}>
      {label && renderLabel()}
      <Dropdown
        containerStyle={[
          styles.containerStyle,
          containerStyles && { ...containerStyles },
        ]}
        style={[
          styles.dropdown,
          style && { ...styles },
          isFocus && { borderColor: focusColor ? focusColor : "blue" },
        ]}
        placeholderStyle={[
          styles.placeholderStyle,
          {
            color: color
              ? isFocus
                ? focusColor
                : color
              : isFocus
              ? focusColor
              : Colors.deepDarkGray,
          },
        ]}
        selectedTextStyle={[
          styles.selectedTextStyle,
          { color: color ? color : Colors.deepDarkGray },
        ]}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search={search ? search : false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <View>
            {Icon && (
              <Icon
                style={styles.icon}
                color={
                  isFocus
                    ? iconColor
                      ? iconColor
                      : "blue"
                    : iconColor
                    ? iconColor
                    : "black"
                }
                name={iconName}
                size={iconSize}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    top: -25,
  },
  container: {
    padding: 16,
    position: "relative",
  },
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 13,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {},
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});
export default DropDown;
