import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import style from '../estilo'

const FilhoDireto = ({ a, b }) => {
  return (
    <View>
      <Text style={style.bigText}>{a}</Text>
      <Text style={style.bigText}>{b}</Text>
    </View>
  );
}
export default FilhoDireto;