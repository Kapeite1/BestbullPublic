import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Container, Foto, Imagem, Informações, Name, Ingredientes, Preco, Valor, Comprar} from './styles';
import firebase from '../../services/firebaseConnection';


export default function Hamburguer( { data }) {

    const navigation = useNavigation();
    const [url, setUrl] = useState('');

    useEffect(() => {
        async function getPhoto(data) { 
          await firebase.storage().ref('Hamburguer').child(data.nome+'.jpg').getDownloadURL().then((url) => {
            setUrl(url);
          });
        }
        getPhoto(data);
      }, [])

 return (
   <Container>
        <Foto>
            <Imagem source={{
          uri: url
        }}/>
        </Foto>
        
        <Informações>
            <Name>{data.nome}</Name>
            <Ingredientes>{data.ingredientes}</Ingredientes>
        </Informações>
        <Preco onPress={() => navigation.push('CarrinhoHamb', { data })}>
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