import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Filho from './Filho';

const PaiDireto = () => {
  let x = 1;
  let y = 2;
  return (
    <View>
      <Filho a={x} b={y} />
      <Filho a={x + 1} b={y + 1} />
    </View>
  );
}
export default PaiDireto;