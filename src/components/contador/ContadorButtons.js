import React from 'react';
import { View, Text, Button } from 'react-native';

const ContadorButtons = ({ num, setNum }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Button title='+' onPress={() => setNum(num + 1)} />
      <Button title='-' onPress={() => setNum(num - 1)} />
    </View>
  );
}
export default ContadorButtons;