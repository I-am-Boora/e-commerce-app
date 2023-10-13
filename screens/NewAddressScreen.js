import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import { scale } from "react-native-size-matters";
import { COLOR } from "../Constraints/colors";

const NewAddressScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ height: scale(50), backgroundColor: COLOR.primary }} />
    </SafeAreaView>
  );
};

export default NewAddressScreen;

const styles = StyleSheet.create({});
