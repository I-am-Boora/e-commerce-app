import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { COLOR } from "../Constraints/colors";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NewAddressScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{ height: verticalScale(50), backgroundColor: COLOR.primary }}
      />
      <View style={{ paddingHorizontal: scale(10) }}>
        <Text style={styles.titleText}>Add Addresses</Text>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("AddAddress")}
        >
          <Text style={styles.text}>Add new address</Text>
          <Feather name="chevron-right" size={24} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default NewAddressScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: scale(8),
    borderWidth: scale(1),
    borderColor: "grey",
    padding: moderateScale(10),
    marginVertical: verticalScale(10),
    justifyContent: "space-between",
  },
  text: {
    fontSize: scale(13),
    fontWeight: "500",
    color: "grey",
  },
  titleText: {
    fontSize: scale(15),
    marginTop: verticalScale(10),
    fontWeight: "bold",
  },
});
