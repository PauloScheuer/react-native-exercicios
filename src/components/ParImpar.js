import React from 'react';
import { Text } from 'react-native';

import style from './estilo';

const ParImpar = ({ num = 0 }) => {
  return (
    <Text style={style.bigText}>O resultador é: {num % 2 === 0 ? 'Par' : 'Ímpar'}</Text>
  );
}
export default ParImpar;