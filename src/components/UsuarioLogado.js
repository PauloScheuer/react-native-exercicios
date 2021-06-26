import React from 'react';
import { Text } from 'react-native';

import style from './estilo';
import If from './If';

const UsuarioLogado = ({ usuario = {} }) => {
  return (
    <>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text style={style.bigText}>Usuário logado:</Text>
        <Text style={style.bigText}>{usuario.nome} - {usuario.email}</Text>
      </If>
    </>
  );
}
export default UsuarioLogado;