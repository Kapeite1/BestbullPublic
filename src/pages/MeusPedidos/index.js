import React, { useContext, useEffect, useState } from 'react';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import { View, Text } from 'react-native';
import PedidoInfo from '../../components/PedidoInfo'

import Header from '../../components/Header'
import { List } from './styles';

export default function MeusPedidos() {

  const {user, pedido, acao, savePedido, uidAdm, handleAcao} = useContext(AuthContext);
  const [pedidos, setPedidos] = useState([])
  const [keyPedido, setKeyPedido] = useState([])

  async function loadList() {
    await firebase.database().ref('users')
    .child(user.uid)
    .child('pedidos')
    .on('value', (snapshot) => {
      //console.log(snapshot.val())
      setPedidos([]);
      //console.log(!Object.values(snapshot).length)
      if (snapshot.val() !== null){
        setPedidos(Object.keys(snapshot.val()))
      }
      
    })
  }

  useEffect(() => {
    loadList();
  }, []);

 return (
   <View style={{flex: 1}} >
       <Header name='Meus Pedidos'/>

       <List
        showsVerticalScrollIndicator={false}
        data={pedidos.reverse()}
        keyExtractor={ item => item }
        renderItem={ ({item}) => ( <PedidoInfo data={item} userUid={user.uid} /> ) }
      />
   </View>
  );
}