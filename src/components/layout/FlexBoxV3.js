import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

const FlexBoxV3 = () => {
  return (
    <View style={style.flexV3}>
      <Quadrado tamanho={20} />
      <Quadrado cor="#00f" tamanho={30} />
      <Quadrado cor="#0f0" tamanho={40} />
      <Quadrado cor="#f00" tamanho={50} />
    </View>
  );
}
export default FlexBoxV3;

const style = StyleSheet.create({
  flexV3: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#eee',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})