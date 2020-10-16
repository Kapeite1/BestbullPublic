import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, ContainerText } from './styles';


export default function PedidoInfo( { data }) { 
 
 return (
   <Container>
      <View style = {{marginBottom: 9}}>
        <View style={{ elevation: 5, borderRadius: 25, backgroundColor: "#71E57C", justifyContent: 'center', alignItems: 'center', paddingLeft: 10, alignSelf: 'flex-start', paddingRight: 10}}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 19, textTransform: "capitalize"}}>{data[0].estado}</Text>
        </View>
      </View>
      <ContainerText style={{ marginBottom: 8}}>Produtos:</ContainerText>
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
            
            )
          }          
        )}
      <ContainerText>Total: R$ {data[0].total}</ContainerText>
      { data[0].troco === 'Cartão' ? 
      <ContainerText>Forma de Pagamento: Cartão</ContainerText> :
      <View>
        <ContainerText>Forma de Pagamento: Dinheiro</ContainerText>
        { data[0].troco === '' ? <ContainerText>Troco: Sem troco</ContainerText> : <ContainerText>Troco: {data[0].troco}</ContainerText>}
      </View>
      } 

        
        
   </Container>
  );
}