import React from 'react';
import { View, Text } from 'react-native';

import style from './estilo';

const Aleatorio = ({ min, max }) => {
  const random = parseInt((Math.random() * (max - min + 1)) + min);
  // console.warn(min, max)
  return (
    <View >
      <Text style={style.bigText}>{random} está entre {min} e {max}</Text>
    </View>
  );
}

export default Aleatorio;