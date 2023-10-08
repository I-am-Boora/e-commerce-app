import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { COLOR } from "../Constraints/colors";
import AddressBar from "../components/AddressBar";
import CategoryList from "../components/CategoryList";
import ImageSlider from "../components/ImageSlider";
import axios from "axios";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
import TrandingDeal from "../components/TrandingDeal";
import { scale, verticalScale } from "react-native-size-matters";
import Todaydeal from "../components/Todaydeal";
// import { list } from "../data";
const ProductScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const result = await axios.get(
        "https://fakestoreapi.com/products?limit=20"
      );
      return setData(result.data);
    };
    apiCall();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <CustomHeader />
      <ScrollView>
        <AddressBar />
        <CategoryList />
        <ImageSlider />
        <TrandingDeal />
        <View style={styles.line} />
        <Todaydeal />
        <View style={styles.line} />
        <ScrollView>
          {data.map((item, index) => {
            return (
              <View key={index}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text>{item.category}</Text>
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>
      <StatusBar backgroundColor={COLOR.primary} />
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  line: {
    height: scale(3),
    backgroundColor: "#bdbdbd",
    marginHorizontal: scale(10),
    marginVertical: verticalScale(5),
  },
});
