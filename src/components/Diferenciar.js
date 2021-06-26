import React from 'react';
import { View, Text, Platform } from 'react-native';

import style from './estilo';

const Diferenciar = () => {
  return (
    <View>
      <Text style={style.bigText}>{Platform.OS === 'android' ? 'Android' : Platform.OS === 'ios' ? 'IOS' : 'Outro sistema'}</Text>
    </View>
  );
}
export default Diferenciar;