import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { COLOR } from "../Constraints/colors";
import { scale, verticalScale } from "react-native-size-matters";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const CustomHeader = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Feather name="search" size={24} color="black" />
          <TextInput placeholder="Search in Amazon.in" style={styles.input} />
          <Ionicons name="mic-outline" size={24} color="gray" />
        </View>
      </View>
    </>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.primary,
    height: verticalScale(50),
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  header: {
    flexDirection: "row",
    padding: scale(5),
    marginHorizontal: scale(20),
    borderRadius: scale(6),
    backgroundColor: COLOR.white,
  },
  input: {
    flex: 1,
    paddingLeft: scale(10),
    fontSize: scale(15),
  },
});
