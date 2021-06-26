import React from 'react';
import { View, Button } from 'react-native';

const FilhoIndireto = ({ max, min, fun }) => {
  const gerarNumero = (max, min) => {
    return parseInt((Math.random() * (max - min + 1)) + min)
  }

  return (
    <View>
      <Button title='Executar' onPress={() => {
        const n = gerarNumero(max, min);
        fun(n);
      }} />
    </View>
  );
}
export default FilhoIndireto;