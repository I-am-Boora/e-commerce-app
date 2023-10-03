import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { COLOR } from "../Constraints/colors";
import { scale, verticalScale } from "react-native-size-matters";
import { FontAwesome } from "@expo/vector-icons";

const InputContainer = () => {
  return (
    <View style={styles.inputContainer}>
      <FontAwesome name="user" size={24} color="grey" style={styles.icon} />
      <TextInput placeholder="Enter email address" style={styles.inputText} />
    </View>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "90%",
    height: verticalScale(44),
    alignItems: "center",
    backgroundColor: COLOR.grey,
    justifyContent: "center",
    borderRadius: scale(10),
  },
  inputText: {
    fontSize: scale(16),
    flex: 1,
  },
  icon: {
    paddingHorizontal: scale(10),
  },
});
