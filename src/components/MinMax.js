import React from 'react';
import { View, Text } from 'react-native';

import style from './estilo';

const MinMax = ({ min, max }) => {
  return (
    <View >
      <Text style={style.bigText}>{min} é menor que {max}</Text>
    </View>
  );
}

export default MinMax;