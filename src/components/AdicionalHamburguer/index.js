import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {Container, Botao, Texto, AreaQuantidade, Item  } from './styles'

import Icon from 'react-native-vector-icons/Feather'

export default function AdicionalHamburguer({data, funcaoSoma, funcaoSubtrair}) {
    const [quantidade, setQuantidade] = useState(0)

    function adicionar(){
      let soma = quantidade +1;
      setQuantidade(soma);
      funcaoSoma(data.valor, data.nome, soma)
    }

    function diminuir(){
      let subtrair = 0;
      (quantidade === 0 ? '' : diminuirValor(subtrair))
      
      ;
    }

    function diminuirValor(subtrair) {
      subtrair = quantidade - 1
      setQuantidade(subtrair)
      funcaoSubtrair(data.valor, data.nome)
    }

 return (
   <Container>
       <Item>{data.nome}</Item>
       <AreaQuantidade>
           <Botao onPress= {() => diminuir()}>
                <Icon name='minus-circle' color='black' size={22}/>
           </Botao>
           <Texto> {quantidade} </Texto>
           <Botao onPress= {() => adicionar()}>
                <Icon name='plus-circle' color='black' size={22}/>
           </Botao>
       </AreaQuantidade>
       <Texto> R$ {data.valor} </Texto>
   </Container>
  );
}