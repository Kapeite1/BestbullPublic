import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, ContainerText, TextInfo } from './styles';


export default function PedidosClientes( { data }) { 
 return (
   <Container>
     <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8, alignItems: 'center'}}>
      <TextInfo>Cliente: {data[0].cliente}</TextInfo>
      <View style={{ elevation: 5, borderRadius: 25, backgroundColor: "#71E57C", justifyContent: 'center', alignItems: 'center',  paddingLeft: 10, alignSelf: 'flex-end', paddingRight: 10}}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 19, textTransform: "capitalize"}}>{data[0].estado}</Text>
      </View>
     </View>
     <View style={{ marginBottom: 10}}>
      <TextInfo>Endereço: {data[0].rua}, {data[0].numero}, {data[0].bairro}, {data[0].referencia} </TextInfo>
      <TextInfo>Telefone: {data[0].telefone} </TextInfo>
    </View>
     <View>
       <TextInfo style={{marginBottom: 7}}>Produtos:</TextInfo>
      {data.map((element) => {
        return (
          <View>
            <View style={{flexDirection: "row", justifyContent: 'space-between', border: 5, borderBottomWidth: 1, borderColor: "#DFDFDF", marginBottom: 6, flex:1 }}>
              <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
                <ContainerText >{element.nome}</ContainerText>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ContainerText>{element.informacao}</ContainerText>
              </View>
              <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
                <ContainerText>R$ {element.valor}</ContainerText>
              </View>
            </View>
          </View>
        )}          
      )}
      { data[0].troco === 'Cartão' ? 
      <TextInfo>Forma de Pagamento: Cartão</TextInfo> :
      <View>
        <TextInfo>Forma de Pagamento: Dinheiro</TextInfo>
        { data[0].troco === '' ? <TextInfo>Troco: Sem troco</TextInfo> : <TextInfo>Troco: {data[0].troco}</TextInfo>}
      </View>
      } 

     </View>
     <View style={{alignItems: 'flex-end'}}>
     <View style={{ elevation: 5, borderRadius: 25, backgroundColor: "#FF3737", justifyContent: 'center', alignItems: 'center',  paddingLeft: 10, alignSelf: 'flex-end', paddingRight: 10}}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 19, textTransform: "capitalize"}}>Total: R$ {data[0].total}</Text>
      </View>
     </View>
     
    
     
     
   </Container>
  );
}