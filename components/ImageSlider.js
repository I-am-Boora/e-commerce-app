import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { images } from "../data";
import { scale } from "react-native-size-matters";
const ImageSlider = () => {
  return (
    <View style={styles.container}>
      <SliderBox
        images={images}
        sliderBoxHeight={270}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        autoplay
        circleLoop
      />
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    marginTop: scale(10),
  },
});
