import React from 'react';
import { View, Text, FlatList } from 'react-native';

import produtos from './produtos';

import style from '../estilo';
const ListaProdutosV2 = () => {
  return (
    <View>
      <Text style={style.bigText}>Lista de produtos V2</Text>
      <FlatList data={produtos} keyExtractor={item => item.id} renderItem={({ item: prod }) => {
        return <Text >{prod.id}) {prod.nome} - R$ {prod.preco}</Text>
      }} />
    </View>
  );
}
export default ListaProdutosV2;