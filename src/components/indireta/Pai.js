import React, { useState } from 'react';
import FilhoIndireto from './Filho';
import { View, Text } from 'react-native';

import style from '../estilo';

const PaiIndireto = () => {
  const [num, SetNum] = useState(0);

  const exibir = (num) => {
    console.warn(num);
    SetNum(num);
  }

  return (
    <View>
      <Text style={style.bigText}>{num}</Text>
      <FilhoIndireto min={1} max={60} fun={exibir} />
    </View>
  );
}
export default PaiIndireto;