import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlexBoxV4 = () => {
  return (
    <View style={style.flexV4}>
      <View style={style.V0}></View>
      <View style={style.V1}></View>
      <View style={style.V2}></View>
    </View>
  );
}
export default FlexBoxV4;

const style = StyleSheet.create({
  flexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000',
  },
  V0: {
    backgroundColor: '#0f0',
    height: 300
  },
  V1: {
    backgroundColor: '#00f',
    flex: 2
  },
  V2: {
    backgroundColor: '#f00',
    flex: 1
  }
})