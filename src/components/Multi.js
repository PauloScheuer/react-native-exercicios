import React from 'react';
import { View, Text } from 'react-native';

import style from './estilo';

const Comp1 = () => {
  return <Text style={style.bigText}>#1</Text>;
}
const Comp2 = () => {
  return <Text style={style.bigText}>#2</Text>;
}
const Comp3 = () => {
  return <Text style={style.bigText}>#3</Text>;
}

export default Comp1;
export { Comp2, Comp3 };