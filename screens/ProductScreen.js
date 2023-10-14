import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { COLOR } from "../Constraints/colors";
import AddressBar from "../components/AddressBar";
import CategoryList from "../components/CategoryList";
import ImageSlider from "../components/ImageSlider";
import axios from "axios";
import TrandingDeal from "../components/TrandingDeal";
import { scale, verticalScale } from "react-native-size-matters";
import Todaydeal from "../components/Todaydeal";
import ProductItem from "../components/ProductItem";
import DropDownPicker from "react-native-dropdown-picker";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

const ProductScreen = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("jewelery");
  const [open, setOpen] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([
    { label: "electronics", value: "electronics" },
    { label: "jewelery", value: "jewelery" },
    { label: "men's clothing", value: "men's clothing" },
    { label: "women's clothing", value: "women's clothing" },
  ]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  useEffect(() => {
    const apiCall = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      setData(result.data);
    };
    apiCall();
  }, []);
  const handleAddressPress = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <CustomHeader />
        <ScrollView>
          <AddressBar
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            handleAddressPress={handleAddressPress}
          />
          <CategoryList />
          <ImageSlider />
          <TrandingDeal />
          <View style={styles.line} />
          <Todaydeal data={data} />
          <View style={styles.line} />
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 15,
                width: scale(200),
                marginVertical: verticalScale(10),
              }}
            >
              <DropDownPicker
                open={open}
                value={category}
                items={items}
                setOpen={setOpen}
                setValue={setCategory}
                setItems={setItems}
                placeholder={category}
              />
            </View>
          </View>
          <View style={styles.productItem}>
            {data
              .filter((item, index) => item.category == category)
              .map((item, index) => {
                return <ProductItem item={item} key={index} />;
              })}
          </View>
        </ScrollView>
      </SafeAreaView>
      <Modal
        isVisible={isModalVisible}
        deviceWidth={width}
        deviceHeight={height}
        backdropOpacity={0.7}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        style={styles.modalContainer}
      >
        <View style={[styles.modal, { width: width }]}>
          <View
            style={{
              width: scale(40),
              height: scale(5),
              backgroundColor: "#b2bec3",
              borderRadius: scale(10),
              marginTop: verticalScale(5),
              alignSelf: "center",
            }}
          />
          <Text style={styles.modalTitle}>Choose your Location</Text>
          <Text style={{ fontSize: scale(12), color: "grey" }}>
            Select a delivery location to see product availability and delivery
            options
          </Text>
          <Pressable
            style={styles.addressContainer}
            onPress={() => navigation.navigate("NewAddress")}
          >
            <Text style={styles.addressText}>
              Add an Address or pick-up point
            </Text>
          </Pressable>
          <Pressable style={styles.currentLocation}>
            <Ionicons
              name="location-outline"
              size={24}
              color={COLOR.darkGreen}
              style={{ paddingRight: scale(5) }}
            />
            <Text
              style={{
                fontSize: scale(12),
                fontWeight: "500",
                color: COLOR.darkGreen,
              }}
            >
              Choose current location
            </Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  image: {
    width: scale(100),
    height: verticalScale(100),
  },
  line: {
    height: scale(3),
    backgroundColor: "#bdbdbd",
    marginHorizontal: scale(10),
    marginVertical: verticalScale(5),
  },
  productItem: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: scale(50),
    columnGap: scale(20),
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    paddingBottom: verticalScale(15),
    position: "absolute",
    bottom: scale(-20),
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15),
    paddingHorizontal: scale(10),
  },
  modalTitle: {
    fontSize: scale(15),
    fontWeight: "500",
    marginVertical: verticalScale(5),
  },
  addressContainer: {
    height: scale(80),
    borderWidth: scale(1),
    borderColor: "grey",
    alignItems: "center",
    borderRadius: scale(8),
    justifyContent: "center",
    marginVertical: verticalScale(10),
  },
  addressText: {
    fontSize: scale(13),
    fontWeight: "500",
    color: COLOR.darkGreen,
  },
  currentLocation: {
    flexDirection: "row",
    alignItems: "center",
  },
});
