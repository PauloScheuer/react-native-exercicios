import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

const FlexBoxV2 = () => {
  return (
    <View style={style.flexV2}>
      <Quadrado />
      <Quadrado cor="#00f" />
      <Quadrado cor="#0f0" />
      <Quadrado cor="#f00" />
    </View>
  );
}
export default FlexBoxV2;

const style = StyleSheet.create({
  flexV2: {
    width: '100%',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})