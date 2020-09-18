import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Delete } from './styles';

export default function ItemCarrinho(props) {

  const {deletandoItem} = useContext(AuthContext);

 return (
   <View >
      <Container>
      <Text style={{fontSize: 19}}>{props.nome}</Text>
       <Text style={{fontSize: 19}}>R$ {props.valor}</Text>
       <Delete onPress={() => deletandoItem(props.item)}>
        <Icon name='trash-2' color='black' size={25}/>
       </Delete>
      </Container>
    <Text style={{fontSize: 13}}>{props.info}</Text>
       
       
       
   </View>
   
  );
}