import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import style from './estilo';

const DigiteSeuNome = () => {
  const [nome, SetNome] = useState('');
  return (
    <View>
      <Text style={style.bigText}>Digite seu nome:</Text>
      <TextInput placeholder="Exemplo" value={nome} onChangeText={nome => SetNome(nome)} />
      {nome !== '' && (<Text>Seu nome é {nome}?</Text>)}
    </View>
  );
}
export default DigiteSeuNome;