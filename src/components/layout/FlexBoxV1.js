import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

const FlexBoxV1 = () => {
  return (
    <View style={style.flexV1}>
      <Quadrado />
      <Quadrado cor="#00f" />
      <Quadrado cor="#0f0" />
      <Quadrado cor="#f00" />
    </View>
  );
}
export default FlexBoxV1;

const style = StyleSheet.create({
  flexV1: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'space-evenly'
  }
})