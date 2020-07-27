import React, {useState} from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';

import { Container, List } from './styles';
import Header from '../../components/Header';
import Hamburguer from '../../components/Hamburguer';

export default function Sanduiches() {

  const [hamburguer, setHamburguer] = useState([
    {
      id: '1',
      nome: 'x-tudo',
      ingredientes: 'Pão, 2 carnes, ovos, bacon, frango, queijo, presunto, alface e tomate.',
      valor: '9,90'
    },
    {
      id: '2',
      nome: 'x-frango',
      ingredientes: 'Pão, 2 carnes, ovos, bacon, frango, queijo, presunto, alface e tomate.',
      valor: '5,50'
    },
    {
      id: '3',
      nome: 'x-bacon',
      ingredientes: 'Pão, 2 carnes, ovos, bacon, frango, queijo, presunto, alface e tomate.',
      valor: '4,50'
    },
    {
      id: '4',
      nome: 'x-bacon',
      ingredientes: 'Pão, 2 carnes, ovos, bacon, frango, queijo, presunto, alface e tomate.',
      valor: '4,50'
    },
    {
      id: '5',
      nome: 'x-bacon',
      ingredientes: 'Pão, 2 carnes, ovos, bacon, frango, queijo, presunto, alface e tomate.',
      valor: '4,50'
    },
    {
      id: '6',
      nome: 'x-bacon',
      ingredientes: 'Pão, 2 carnes, ovos, bacon, frango, queijo, presunto, alface e tomate.',
      valor: '4,50'
    }
  ])

 return (
   <Container>
     <Header/>
     <List
      showsVerticalScrollIndicator={false}
      data={hamburguer}
      keyExtractor={ item => item.id }
      renderItem={ ({item}) => ( <Hamburguer data={item} /> ) }
    />
   </Container>
  );
}