import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default function Slider (){
    const [data, setdata] = useState({
        images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?sea",
            "https://source.unsplash.com/1024x768/?tree",
          ]
    });

    return (
        <SliderBox
          images={data.images}
          autoplay={true}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});