import React from 'react';
import { View, } from 'react-native';

const Quadrado = ({ cor, tamanho }) => {
  const lado = tamanho || 35;
  return (
    <View style={{
      height: lado,
      width: lado,
      backgroundColor: cor || '#000'
    }} />
  );
}
export default Quadrado;
