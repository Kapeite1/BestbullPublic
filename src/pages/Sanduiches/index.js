import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import firebase from '../../services/firebaseConnection';

import { Container, List } from './styles';
import Header from '../../components/Header';
import Hamburguer from '../../components/Hamburguer';

export default function Sanduiches() {

  const [hamburguer, setHamburguer] = useState([]);


  useEffect(() => {
    

    async function loadList() {
      await firebase.database().ref('Produtos').child('Hamburguer').once('value', (snapshot) => {
        setHamburguer([]);

        snapshot.forEach((childItem) => {
          
          let list = {
            key: childItem.key,
            nome: childItem.val().nome,
            valor: childItem.val().valor,
            ingredientes: childItem.val().ingredientes,          
          };

          setHamburguer(oldArray => [...oldArray, list])
        })
      })
    }
    
    loadList();
  }, [])

 return (
   <Container>
     <Header name = 'Sanduiches'/>
     <List
      showsVerticalScrollIndicator={false}
      data={hamburguer}
      keyExtractor={ item => item.id }
      renderItem={ ({item}) => ( <Hamburguer data={item} /> ) }
    />
   </Container>
  );
}