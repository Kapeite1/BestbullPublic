import React, { useContext, useState } from 'react';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import { View, Text, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Header from '../../components/Header';
import PedidosClientes from '../../components/PedidosClientes'

import { List } from './styles';

export default function Pedidos() {

  const {user} = useContext(AuthContext);
  const [pedidos, setPedidos] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [ loading, setLoading] = useState(false)
  const [newDate, setNewDate] = useState(new Date)

  async function loadList() {
    await firebase.database().ref('users')
    .child(user.uid)
    .child('pedidos')
    .limitToLast(10)
    .on('value', (snapshot) => {
      setLoading(false)
      setPedidos([])
      snapshot.forEach((childItem) => {
        var list = []
        childItem.forEach(element => {
            var info = {
              key: element.key,
              bairro: element.val().bairro,
              cliente: element.val().cliente,
              data: element.val().data,
              estado: element.val().estado,
              informacao: element.val().informacao,
              nome: element.val().nome,
              numero: element.val().numero,
              referencia: element.val().referencia,
              rua: element.val().rua,
              telefone: element.val().telefone,
              total: element.val().total,
              troco: element.val().troco,
              uidCliente: element.val().uidCliente,
              uidPedido: element.val().uidPedido,
              valor: element.val().valor
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
      <Header name='Pedidos dos Clientes'/>
      {loading ? 
        <List
        showsVerticalScrollIndicator={false}
        data={pedidos.reverse()}
        keyExtractor={ item => item[0].key }
        refreshing={refreshing}
        onRefresh={() => handleRefresh()}
        renderItem={ ({item}) => ( <PedidosClientes data={item} /> ) }
      /> :
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={40} color='orange'/>   
      </View>
      }
      
      
   </View>
  );
}