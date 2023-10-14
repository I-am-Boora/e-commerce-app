import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { COLOR } from "../Constraints/colors";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/addToCartSlice";

const ProductItem = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();

  const handleOnPress = (item) => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };
  return (
    <Pressable style={styles.container}>
      <Image source={{ uri: item?.image }} style={styles.image} />
      <Text numberOfLines={1} style={styles.text}>
        {item?.title}
      </Text>
      <View style={styles.price}>
        <Text style={styles.btnText}>₹{item?.price}</Text>
        <Text style={[styles.btnText, { color: COLOR.yellow }]}>
          {item?.rating?.rate} rating
        </Text>
      </View>
      <Pressable
        style={styles.btnContainer}
        onPress={() => handleOnPress(item)}
      >
        <Text style={styles.btnText}>
          {addedToCart ? "Added to cart " : "add to cart"}
        </Text>
      </Pressable>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: scale(150),
    marginVertical: verticalScale(8),
  },
  image: {
    width: scale(130),
    height: verticalScale(130),
    resizeMode: "contain",
  },
  text: {
    paddingTop: verticalScale(5),
    fontSize: 15,
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(5),
    paddingVertical: verticalScale(4),
  },

  btnContainer: {
    backgroundColor: COLOR.yellow,
    alignItems: "center",
    justifyContent: "center",
    padding: moderateScale(8),
    borderRadius: scale(75),
  },
  btnText: {
    fontSize: 15,
    fontWeight: "500",
  },
});
