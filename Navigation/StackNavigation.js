import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductScreen from "../screens/ProductScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import { Ionicons } from "@expo/vector-icons";
import { COLOR } from "../Constraints/colors";

const StackNavigation = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Bottom = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Product"
          component={ProductScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Ionicons name="home" size={24} color={COLOR.darkGreen} />
              ) : (
                <Ionicons
                  name="home-outline"
                  size={24}
                  color={COLOR.darkGreen}
                />
              );
            },
            tabBarLabel: "Home",
            tabBarLabelStyle: {
              color: COLOR.darkGreen,
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Ionicons name="person" size={24} color={COLOR.darkGreen} />
              ) : (
                <Ionicons
                  name="person-outline"
                  size={24}
                  color={COLOR.darkGreen}
                />
              );
            },
            tabBarLabel: "Profile",
            tabBarLabelStyle: {
              color: COLOR.darkGreen,
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Ionicons name="cart" size={24} color={COLOR.darkGreen} />
              ) : (
                <Ionicons
                  name="cart-outline"
                  size={24}
                  color={COLOR.darkGreen}
                />
              );
            },
            tabBarLabel: "Cart",
            tabBarLabelStyle: {
              color: COLOR.darkGreen,
            },
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={Bottom} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
