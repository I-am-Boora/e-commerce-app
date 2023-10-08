import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    // <SafeAreaView styles={{ flex: 1 }}>
    <View styles={{ flex: 1, justifyContent: "center" }}>
      {/* <CustomHeader /> */}
      <Text>Hello world</Text>
    </View>

    // <ScrollView></ScrollView>
    // </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
