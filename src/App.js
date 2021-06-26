import React from 'react';
import { SafeAreaView } from 'react-native';

import style from './components/estilo';
import Mega from './components/mega/Mega';

// import FlexBoxV4 from './components/layout/FlexBoxV4';
// import FlexBoxV3 from './components/layout/FlexBoxV3';
// import FlexBoxV2 from './components/layout/FlexBoxV2';
// import FlexBoxV1 from './components/layout/FlexBoxV1';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import UsuarioLogado from './components/UsuarioLogado';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import ParImpar from './components/ParImpar';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2';
// import Primeiro from './components/Primeiro';
// import Comp1, { Comp2, Comp3 } from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import PaiDireto from './components/direta/Pai';
// import PaiIndireto from './components/indireta/Pai';

export default () => {
  return <SafeAreaView style={style.App}>
    <Mega quantidade={7} />
    {/* <Primeiro />
    <FlexBoxV4 />
    <FlexBoxV3 />
    <FlexBoxV2 />
    <FlexBoxV1 />
    <DigiteSeuNome />
    <ListaProdutosV2 />
    <ListaProdutos />
    <UsuarioLogado usuario={{ nome: 'Zeca', email: 'zeca@email.com' }} />
    <UsuarioLogado usuario={{ nome: 'Seu jorge' }} />
    <UsuarioLogado />
    <Familia>
      <Membro nome="Paulo" sobrenome="Gomes" />
      <Membro nome="Paulo" sobrenome="Scheuer" />
    </Familia>
    <Familia>
      <Membro nome="Roberto" sobrenome="Gomes" />
      <Membro nome="Roberto" sobrenome="Scheuer" />
    </Familia>
    <ParImpar num={1} />
    <ParImpar num={2} />
    <Diferenciar />
    <ContadorV2 />
    <PaiIndireto />
    <PaiDireto />
    <Contador inicial={100} passo={2} />
    <Botao />
    <MinMax min={3} max={20} />
    <Aleatorio min={1} max={20} />
    <Comp1 />
    <Comp2 />
    <Comp3 /> */}
  </SafeAreaView>
}


