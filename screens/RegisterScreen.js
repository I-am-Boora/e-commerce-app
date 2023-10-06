import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { COLOR } from "../Constraints/colors";

import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState("");
  //FIXME  console.log(email);
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = { name, email, password };
    axios
      .post("http://192.168.25.248:8080/register", user)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
    // const res = await fetch("http://192.168.25.248:8080/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setData(JSON.stringify(data)))
    //   .catch((error) => console.log(error));
    // const res = await axios.get("http://192.168.25.248:8080/home");
    // console.log(res.data);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Images/a_logo.png")}
        style={styles.image}
      />
      <Text style={styles.login}>Register</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="grey" style={styles.icon} />
        <TextInput
          placeholder="Enter User Name"
          style={styles.inputText}
          name={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="grey" style={styles.icon} />
        <TextInput
          placeholder="Enter email address"
          style={styles.inputText}
          name={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="grey" style={styles.icon} />
        <TextInput
          placeholder="Enter Password"
          style={styles.inputText}
          name={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="grey" style={styles.icon} />
        <TextInput
          placeholder="Confirm Password"
          style={styles.inputText}
          name={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <Pressable style={styles.btnContainer} onPress={handleRegister}>
        <Text style={styles.text}>Register</Text>
      </Pressable>
      <View style={styles.textContainer}>
        <Text>Back to </Text>
        <Text
          style={styles.register}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: scale(200),
    height: verticalScale(80),
    resizeMode: "contain",
    // marginBottom: verticalScale(50),
  },
  login: {
    fontSize: scale(22),
    margin: moderateScale(20),
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    width: "90%",
    height: verticalScale(44),
    alignItems: "center",
    backgroundColor: COLOR.grey,
    justifyContent: "center",
    borderRadius: scale(10),
    marginBottom: verticalScale(10),
  },
  inputText: {
    fontSize: scale(16),
    flex: 1,
  },
  icon: {
    paddingHorizontal: scale(10),
  },
  btnContainer: {
    backgroundColor: COLOR.yellow,
    width: "90%",
    height: verticalScale(44),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(10),
  },
  text: {
    fontSize: scale(18),
    fontWeight: "600",
    color: COLOR.black,
  },
  textContainer: {
    flexDirection: "row",
    marginTop: scale(10),
  },
  register: {
    paddingHorizontal: scale(5),
    fontWeight: "500",
  },
});
