import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import firebase from '../../services/firebaseConnection';

import {List, Container, ContainerProduto, ContainerProdutoNome, ContainerProdutoInformacao, ContainerDadosEstado, ContainerDadosInformacao } from './styles';


function PedidoDados(props) {
  return (
    <View >
      <ContainerDadosEstado>
      <Text style={{fontSize: 19, textTransform: 'uppercase', fontWeight: 'bold'}}>{props.infDados.estado}</Text>
      </ContainerDadosEstado>
      <ContainerDadosInformacao>
        <Text style={{fontSize: 16}}>Data: {props.infDados.data}</Text>
        <Text style={{fontSize: 16}}>Troco para: R$ {props.infDados.troco}</Text>
        <Text style={{fontSize: 16}}>Total: R$ {props.infDados.total}</Text>
      </ContainerDadosInformacao>  
          
    </View>
  );
}

function PedidoProduto(props) {
  return (
    <ContainerProduto>
      <ContainerProdutoNome>
        <Text style={{fontSize: 20}}>{props.infPedidos.nome}</Text>
      </ContainerProdutoNome>
      <ContainerProdutoInformacao>
        <Text>{props.infPedidos.informacao}</Text>
      </ContainerProdutoInformacao>
    </ContainerProduto>  
  );
}

export default function PedidoInfo( { data, userUid }) {

  const [dadosPedido, setDadosPedido] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {

    async function loadDados() {
      await firebase.database().ref('users').child(userUid).child('pedidos').child(data).on('value', (snapshot) => {
        setDadosPedido([]);
        setPedidos([]);  
        snapshot.forEach((childItem) => {
          if (childItem.key === 'dados'){
            let list = {
              key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
              data: childItem.val().data,
              estado: childItem.val().estado,
              troco: childItem.val().troco,
              total: childItem.val().total,
            };
            setDadosPedido(oldArray => [...oldArray, list]);
            
          } else {
            let list = {
              key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
              informacao: childItem.val().informacao,
              nome: childItem.val().nome,
              valor: childItem.val().valor
            };
            setPedidos(oldArray => [...oldArray, list]);
            
          }
        })
      })
    }
    loadDados();
  }, []);

    
 return (
   <Container>
        <List
          showsVerticalScrollIndicator={false}
          data={dadosPedido}
          keyExtractor={ item => item.key }
          renderItem={ ({item}) => ( <PedidoDados infDados={item} /> ) }
        />
        
        <List
          showsVerticalScrollIndicator={false}
          data={pedidos}
          keyExtractor={ item => item.key }
          renderItem={ ({item}) => ( <PedidoProduto infPedidos={item}/> ) }
        />
        
        
   </Container>
  );
}