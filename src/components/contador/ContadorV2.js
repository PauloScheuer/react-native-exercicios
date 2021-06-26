import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import ContadorDisplay from './ContadorDisplay';
import ContadorButtons from './ContadorButtons';

import style from '../estilo';

const ContadorV2 = () => {
  const [num, SetNum] = useState(0);
  return (
    <View>
      <Text style={style.bigText}>Contador V2</Text>
      <ContadorDisplay num={num} />
      <ContadorButtons num={num} setNum={SetNum} />
    </View>
  );
}
export default ContadorV2;