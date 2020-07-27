import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Foto, Informações, Name, Ingredientes, Preco, Valor, Comprar} from './styles';

export default function Hamburguer( { data }) {
 return (
   <Container>
        <Foto>
            
        </Foto>
        
        <Informações>
            <Name>{data.nome}</Name>
            <Ingredientes>{data.ingredientes}</Ingredientes>
        </Informações>
        <Preco onPress={() => {
            alert('voce adicionou ao carrinho');
        }}>
            <Valor>
                 R$ {data.valor}
            </Valor>
            <Comprar>
                <Icon name='shopping-cart' color='black' size={30}/>
            </Comprar>
        </Preco>
   
   </Container>
  );
}