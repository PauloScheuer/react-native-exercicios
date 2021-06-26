import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import style from '../estilo';
import Numero from './Numero';

class Mega extends Component {
  state = {
    quantidade: +this.props.quantidade,
    numeros: []
  }

  setQuantidade = (qntd) => {
    this.setState({ quantidade: +qntd })
  }

  gerarNumeros = () => {
    const novosNumeros = [];
    let novoNumero = 0;
    for (let i = 0; i < this.props.quantidade; i++) {
      while (novosNumeros.indexOf(novoNumero) !== -1 || novoNumero === 0) {
        novoNumero = parseInt((Math.random() * 60) + 1);
      }
      novosNumeros.push(novoNumero);
    }
    novosNumeros.sort((a, b) => a - b)
    this.setState({ numeros: novosNumeros });
  }

  render() {
    return (
      <View>

        <Text style={style.bigText}>Gerador de Mega-Sena {this.state.quantidade}</Text>
        <TextInput
          keyboardType={'numeric'}
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
          placeholder="Quantidade de números"
          value={`${this.state.quantidade}`}
          onChangeText={this.setQuantidade} />
        <Button title="Gerar números" onPress={this.gerarNumeros} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.state.numeros.map((num, index) => {
            return <Numero num={num} key={index} />
          })}
        </View>
      </View >
    )
  }
}

export default Mega;