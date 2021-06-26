import React from 'react';
import { View, Text } from 'react-native';

import produtos from './produtos';

import style from '../estilo';
const ListaProdutos = () => {
  return (
    <View>
      <Text style={style.bigText}>Lista de produtos</Text>
      {produtos.map(prod => {
        return <Text key={prod.id}>{prod.id}) {prod.nome} - R$ {prod.preco}</Text>
      })}
    </View>
  );
}
export default ListaProdutos;