import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import style from './estilo';

const Contador = ({ inicial = 0, passo = 1 }) => {
  const [contador, SetContador] = useState(inicial);

  return (
    <>
      <Text>{contador}</Text>
      <Button title="+" onPress={() => SetContador(contador + passo)} />
      <Button title="-" onPress={() => SetContador(contador - passo)} />
    </>
  );
}

export default Contador;