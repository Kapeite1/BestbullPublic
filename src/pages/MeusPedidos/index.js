import React, { useContext, useEffect, useState } from 'react';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import { View, Text, ActivityIndicator } from 'react-native';
import PedidoInfo from '../../components/PedidoInfo'
import { useFocusEffect } from '@react-navigation/native';

import Header from '../../components/Header'
import { List } from './styles';

export default function MeusPedidos() {

  const {user} = useContext(AuthContext);
  const [pedidos, setPedidos] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [ loading, setLoading] = useState(false)

  async function loadList() {
    await firebase.database().ref('users')
    .child(user.uid)
    .child('pedidos')
    .limitToLast(10)
    .once('value', (snapshot) => {
      setLoading(false)
      setPedidos([])
      snapshot.forEach((childItem) => {
        var list = []
        childItem.forEach(element => {
            var info = {
              key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
              informacao: element.val().informacao,
              nome: element.val().nome,
              valor: element.val().valor,
              data: element.val().data,
              estado: element.val().estado,
              total: element.val().total,
              troco: element.val().troco
            }
          list.push(info)
        });
        setPedidos(oldArray => [...oldArray, list])
      })
      setLoading(true)
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      setLoading(false)
      loadList();
    }, [])
  )

  function handleRefresh(){
    setRefreshing(true)
    loadList();
    setRefreshing(false)
  }
  
 return (
   <View style={{flex: 1}} >
      <Header name='Meus Pedidos'/>
      { loading ? 
      <List
      showsVerticalScrollIndicator={false}
      data={pedidos.reverse()}
      keyExtractor={ item => item[0].key }
      refreshing={refreshing}
      onRefresh={() => handleRefresh()}
      renderItem={ ({item}) => ( <PedidoInfo data={item} /> ) }
    />
    :
    <ActivityIndicator size={30} color='orange'/>
    }
      
   </View>
  );
}