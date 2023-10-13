import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { COLOR } from "../Constraints/colors";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const AddressBar = ({ handleAddressPress }) => {
  return (
    <Pressable style={styles.container} onPress={handleAddressPress}>
      <View style={styles.subContainer}>
        <Ionicons name="location-outline" size={24} color="black" />
        <Text style={styles.text}>Deliver to Sonu Boora - Hansi - 125033</Text>
        <Entypo name="chevron-small-down" size={24} color="black" />
      </View>
    </Pressable>
  );
};

export default AddressBar;
const styles = StyleSheet.create({
  container: {
    height: verticalScale(40),
  },
  text: {
    paddingHorizontal: scale(5),
    fontWeight: "500",
  },
  subContainer: {
    backgroundColor: COLOR.secondary,
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
  },
});
