import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { COLOR } from "../Constraints/colors";
import AddressBar from "../components/AddressBar";
import CategoryList from "../components/CategoryList";
import ImageSlider from "../components/ImageSlider";
// import { list } from "../data";
const ProductScreen = () => {
  // const [data, setData] = useState([list]);

  return (
    <SafeAreaView>
      <CustomHeader />
      <ScrollView>
        <AddressBar />
        <CategoryList />
        <ImageSlider />
      </ScrollView>
      <StatusBar backgroundColor={COLOR.primary} />
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
