import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { offers } from "../data";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { COLOR } from "../Constraints/colors";
import { useNavigation } from "@react-navigation/native";

const Todaydeal = () => {
  const navigation = useNavigation();
  return (
    <>
      <Pressable style={{ backgroundColor: "white" }}>
        <Text style={styles.text}>Today's Deals</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.container}>
            {offers.map((item, index) => {
              return (
                <Pressable
                  style={styles.subContainer}
                  key={index}
                  onPress={() =>
                    navigation.navigate("ProductInfo", {
                      id: item.id,
                      item: item,
                    })
                  }
                >
                  <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                    resizeMode="contain"
                  />
                  <View style={styles.dealBtn}>
                    <Text style={styles.dealText}>Upto {item.offer}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </Pressable>
    </>
  );
};

export default Todaydeal;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: verticalScale(10),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: scale(8),
    gap: 8,
  },
  image: {
    width: scale(100),
    height: scale(100),
  },
  text: {
    fontSize: scale(18),
    fontWeight: "500",
    paddingHorizontal: scale(10),
    marginTop: verticalScale(10),
  },
  dealBtn: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: scale(90),
    padding: moderateScale(4),
    marginTop: verticalScale(5),
    borderRadius: scale(4),
  },
  dealText: {
    fontWeight: "500",
    color: COLOR.white,
  },
});
