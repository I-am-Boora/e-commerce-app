import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { COLOR } from "../Constraints/colors";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const AddAddressScreen = () => {
  const [country, setCountry] = useState("India");
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [houseNo, setHoouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ height: scale(50), backgroundColor: COLOR.primary }} />
      <ScrollView>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Text style={styles.titleText}>Add a new address</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="India"
              value={country}
              onChangeText={(text) => setCountry(text)}
              style={styles.textInput}
            />
          </View>
          <Text style={styles.text}>Full name</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="enter your name"
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.textInput}
            />
          </View>
          <Text style={styles.text}>Mobile number</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Mobile No"
              value={mobileNo}
              onChangeText={(text) => setMobileNo(text)}
              style={styles.textInput}
            />
          </View>
          <Text style={styles.text}>Flat,House No,Building,Company</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder=""
              value={houseNo}
              onChangeText={(text) => setHoouseNo(text)}
              style={styles.textInput}
            />
          </View>
          <Text style={styles.text}>Area,Street,sector,village</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder=""
              value={street}
              onChangeText={(text) => setStreet(text)}
              style={styles.textInput}
            />
          </View>
          <Text style={styles.text}>Landmark</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="eg: near SBI bank"
              value={landmark}
              onChangeText={(text) => setLandmark(text)}
              style={styles.textInput}
            />
          </View>
          <Text style={styles.text}>Pincode</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="eg: 125033"
              value={postalCode}
              onChangeText={(text) => setPostalCode(text)}
              style={styles.textInput}
            />
          </View>
          <Pressable
            style={styles.btnContainer}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.btnText}>Add address</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(10),
  },
  titleText: {
    fontSize: scale(15),
    fontWeight: "500",
    marginVertical: verticalScale(10),
  },
  textInputContainer: {
    borderRadius: scale(8),
    borderWidth: scale(1),
    borderColor: "grey",
    padding: moderateScale(10),
  },
  textInput: {
    fontSize: scale(14),
  },
  text: {
    fontWeight: "500",
    fontSize: scale(13),
    marginVertical: verticalScale(7),
  },
  btnContainer: {
    backgroundColor: COLOR.yellow,
    alignItems: "center",
    justifyContent: "center",
    padding: moderateScale(15),
    borderRadius: scale(8),
    marginVertical: verticalScale(10),
  },
  btnText: {
    fontSize: scale(15),
    fontWeight: "500",
  },
});
