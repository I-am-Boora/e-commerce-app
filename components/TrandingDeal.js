import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { deals } from "../data";
import { scale, verticalScale } from "react-native-size-matters";
const TrandingDeal = () => {
  return (
    <>
      <View style={{ backgroundColor: "white" }}>
        <Text style={styles.text}>Tranding Deals of the week</Text>
        <View style={styles.container}>
          {deals.map((item, index) => {
            return (
              <View style={styles.subContainer} key={index}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default TrandingDeal;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginVertical: verticalScale(10),
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    width: scale(150),
    height: scale(150),
    // padding: scale(10),
  },
  image: {
    width: scale(150),
    height: scale(150),
  },
  text: {
    fontSize: scale(18),
    fontWeight: "500",
    paddingHorizontal: scale(10),
    marginTop: verticalScale(10),
  },
});
