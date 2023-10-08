import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { COLOR } from "../Constraints/colors";

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <CustomHeader />
      <ScrollView></ScrollView>
      <StatusBar backgroundColor={COLOR.primary} />
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
