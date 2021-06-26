import React from 'react';
import { View, Text, Button } from 'react-native';

import style from '../estilo';

const ContadorDisplay = ({ num }) => {
  return (
    <View style={{ backgroundColor: '#000' }}>
      <Text style={[style.bigText, { color: '#fff' }]}>{num}</Text>
    </View >
  );
}
export default ContadorDisplay;