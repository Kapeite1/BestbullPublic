import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator } from 'react-native';
import firebase from '../../services/firebaseConnection';

import { Container, List } from './styles';
import Header from '../../components/Header';
import Hamburguer from '../../components/Hamburguer';

export default function Sanduiches() {

  const [hamburguer, setHamburguer] = useState([]);
  const [ loading, setLoading] = useState(false)


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
      setLoading(true)
    }
    setLoading(false)
    loadList();
  }, [])

 return (
   <Container>
     <Header name = 'Sanduiches'/>
     {loading ? 
     <List
     showsVerticalScrollIndicator={false}
     data={hamburguer}
     keyExtractor={ item => item.id }
     renderItem={ ({item}) => ( <Hamburguer data={item} /> ) }
   /> :
   
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={40} color='orange'/>   
    </View>
  }
   </Container>
  );
}