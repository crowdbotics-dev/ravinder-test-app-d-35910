import { Slider } from "react-native-elements";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled2 = () => {
  return <View style={_styles.lRwaILIj}>
      <Slider style={_styles.gPDVbjHL} thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={7} minimumValue={1} value={16} step={7} disabled={true}></Slider></View>;
};

export default Untitled2;

const _styles = StyleSheet.create({
  lRwaILIj: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  gPDVbjHL: {
    left: 147.82608695652175,
    top: 224.63768115942028,
    position: "absolute",
    width: 150,
    height: 40
  },
  oxqyvmBU: {
    left: 46,
    top: 117,
    position: "absolute",
    width: 183,
    height: 69
  }
});