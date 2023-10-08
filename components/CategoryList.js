import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { list } from "../data";
import { scale } from "react-native-size-matters";
const CategoryList = () => {
  return (
    <ScrollView horizontal={true} style={{ backgroundColor: "white" }}>
      {list.map((item, index) => {
        return (
          <View key={index} style={styles.container}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  image: {
    width: scale(50),
    height: scale(50),
  },
  container: {
    height: 100,
    marginHorizontal: scale(10),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: scale(3),
  },
});
