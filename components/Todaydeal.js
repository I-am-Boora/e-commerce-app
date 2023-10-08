import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { offers } from "../data";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { COLOR } from "../Constraints/colors";

const Todaydeal = () => {
  return (
    <>
      <View style={{ backgroundColor: "white" }}>
        <Text style={styles.text}>Today's Deals</Text>
        <ScrollView horizontal>
          <View style={styles.container}>
            {offers.map((item, index) => {
              return (
                <View style={styles.subContainer} key={index}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                    resizeMode="contain"
                  />
                  <View style={styles.dealBtn}>
                    <Text style={styles.dealText}>Upto {item.offer}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
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
    width: scale(80),
    padding: moderateScale(4),
    marginTop: verticalScale(5),
    borderRadius: scale(4),
  },
  dealText: {
    fontWeight: "500",
    color: COLOR.white,
  },
});
