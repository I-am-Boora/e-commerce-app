import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useCallback } from "react";

import { offers } from "../data";
import { useRoute } from "@react-navigation/native";
import CustomHeader from "../components/CustomHeader";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import { COLOR } from "../Constraints/colors";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";

const ProductInfoScreen = ({}) => {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "poppins-light": require("../assets/fonts/Poppins-Light.ttf"),
  });
  const handleOnLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  const route = useRoute();
  const id = route?.params?.id;
  const data = offers.filter((item, index) => item.id == id);
  const width = Dimensions.get("window").width;
  const discount = Math.round(
    ((data[0].oldPrice - data[0].price) / data[0].oldPrice) * 100
  );

  return (
    <>
      <CustomHeader />
      <ScrollView
        style={{ backgroundColor: "white" }}
        onLayout={handleOnLayout}
      >
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {data[0]?.carouselImages?.map((item, index) => (
            <ImageBackground
              source={{ uri: item }}
              style={[styles.image, { width: width }]}
              resizeMode="contain"
              key={index}
            ></ImageBackground>
          ))}
        </ScrollView>
        <Text style={styles.title}>{data[0].title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.title, styles.price, { color: "red" }]}>
            -{discount}%
          </Text>
          <Text style={[styles.title, styles.price]}>
            <Text style={{ fontSize: 16, color: "grey" }}>₹ </Text>
            {data[0].price}
          </Text>
        </View>
        <Text style={styles.mrp}>M.R.P. ₹ {data[0].oldPrice}</Text>
        <View style={styles.line} />
        <Text
          style={{
            fontSize: scale(14),
            fontWeight: "500",
            paddingHorizontal: scale(10),
            color: "grey",
            marginTop: verticalScale(15),
          }}
        >
          Color: <Text style={{ color: "black" }}>{data[0].color}</Text>
        </Text>
        <Text
          style={{
            fontSize: scale(14),
            fontWeight: "500",
            paddingHorizontal: scale(10),
            color: "grey",
            marginVertical: verticalScale(15),
          }}
        >
          size: <Text style={{ color: "black" }}>{data[0].size}</Text>
        </Text>
        <View style={styles.line} />
        <Text
          style={{
            fontSize: scale(14),
            fontWeight: "500",
            paddingHorizontal: scale(10),
            color: "grey",
            marginVertical: verticalScale(5),
          }}
        >
          Total: <Text style={{ color: "black" }}>₹{data[0].price}</Text>
        </Text>
        <Text style={styles.delivery}>
          Free delivery Tomorrow by 3PM order with 10hrs 30mins
        </Text>
        <View style={styles.subContainer}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={styles.text}>
            Deliver to Sonu Boora - Hansi - 125033
          </Text>
        </View>
        <Text
          style={{
            paddingHorizontal: scale(10),
            fontSize: scale(15),
            color: "green",
            fontWeight: "600",
          }}
        >
          In stock
        </Text>
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>Add to cart</Text>
        </Pressable>
        <Pressable style={[styles.btnContainer, { backgroundColor: "orange" }]}>
          <Text style={styles.btnText}>Buy Now</Text>
        </Pressable>
      </ScrollView>
    </>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: verticalScale(400),
  },
  title: {
    fontSize: scale(12),
    fontWeight: "500",
    marginTop: scale(10),
    paddingHorizontal: scale(10),
    fontFamily: "poppins-regular",
  },
  price: {
    marginVertical: verticalScale(5),
    fontSize: scale(25),
    fontFamily: "poppins-regular",
  },
  line: {
    height: scale(3),
    backgroundColor: "#bdbdbd",
    marginHorizontal: scale(10),
    marginVertical: verticalScale(5),
  },
  mrp: {
    textDecorationLine: "line-through",
    paddingHorizontal: scale(10),
    color: "grey",
    fontSize: scale(15),
  },
  delivery: {
    fontSize: scale(15),
    paddingHorizontal: scale(10),
    color: COLOR.darkGreen,
    marginBottom: verticalScale(5),
  },
  text: {
    paddingHorizontal: scale(5),
    fontWeight: "500",
  },
  subContainer: {
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(10),
  },
  btnContainer: {
    backgroundColor: COLOR.yellow,
    alignItems: "center",
    justifyContent: "center",
    padding: moderateScale(15),
    borderRadius: scale(75),
    marginHorizontal: scale(10),
    marginVertical: verticalScale(5),
  },
  btnText: {
    fontSize: 15,
    fontWeight: "500",
  },
});
