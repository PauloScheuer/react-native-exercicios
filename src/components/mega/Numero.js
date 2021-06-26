import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import estilo from '../estilo';

const Numero = ({ num }) => {
  return (
    <View style={style.Container}>
      <Text style={[estilo.bigText, style.Num]}>{num}</Text>
    </View>
  );
}
export default Numero;

const style = StyleSheet.create({
  Container: {
    backgroundColor: '#000',
    height: 40,
    width: 40,
    margin: 5,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Num: {
    color: '#fff'
  }
})