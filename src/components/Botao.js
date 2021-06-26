import React from 'react';
import { Button } from 'react-native';

const Botao = () => {
  const executar = () => {
    console.warn('Executando...')
  }
  return (
    <>
      <Button title="Executar 1.0" onPress={executar} />
      <Button title="Executar 2.0" onPress={() => { console.warn('Executando a segunda versão...') }} />
    </>
  );
}

export default Botao;