import React from 'react';
import { Text } from 'react-native';

import style from '../estilo';

const Membro = ({ nome, sobrenome }) => {
  return (
    <>
      <Text style={style.bigText}>{nome} {sobrenome}</Text>
    </>
  );
}
export default Membro;