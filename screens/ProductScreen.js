import { StyleSheet, Text, View, Image } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { COLOR } from "../Constraints/colors";
import AddressBar from "../components/AddressBar";
import CategoryList from "../components/CategoryList";
import ImageSlider from "../components/ImageSlider";
import axios from "axios";
import TrandingDeal from "../components/TrandingDeal";
import { scale, verticalScale } from "react-native-size-matters";
import Todaydeal from "../components/Todaydeal";
import ProductItem from "../components/ProductItem";
import DropDownPicker from "react-native-dropdown-picker";
const ProductScreen = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("jewelery");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "electronics", value: "electronics" },
    { label: "jewelery", value: "jewelery" },
    { label: "men's clothing", value: "men's clothing" },
    { label: "women's clothing", value: "women's clothing" },
  ]);
  useEffect(() => {
    const apiCall = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      setData(result.data);
    };
    apiCall();
  }, []);
  // console.log(data);
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <CustomHeader />
      <ScrollView>
        <AddressBar />
        <CategoryList />
        <ImageSlider />
        <TrandingDeal />
        <View style={styles.line} />
        <Todaydeal data={data} />
        <View style={styles.line} />
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 15,
              width: scale(200),
              marginVertical: verticalScale(10),
            }}
          >
            <DropDownPicker
              open={open}
              value={category}
              items={items}
              setOpen={setOpen}
              setValue={setCategory}
              setItems={setItems}
              placeholder={category}
            />
          </View>
        </View>
        <View style={styles.productItem}>
          {data
            .filter((item, index) => item.category == category)
            .map((item, index) => {
              console.log(item);
              return <ProductItem item={item} key={index} />;
            })}
        </View>
      </ScrollView>
      <StatusBar backgroundColor={COLOR.primary} />
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  image: {
    width: scale(100),
    height: verticalScale(100),
  },
  line: {
    height: scale(3),
    backgroundColor: "#bdbdbd",
    marginHorizontal: scale(10),
    marginVertical: verticalScale(5),
  },
  productItem: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: scale(50),
    columnGap: scale(20),
  },
});
