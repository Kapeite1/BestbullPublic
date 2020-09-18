import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Container, Foto, Imagem, Informações, Name, Ingredientes, Preco, Valor, Comprar} from './styles';
import firebase from '../../services/firebaseConnection';


export default function MontandoHamburguer( { data, valor }) {

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
        <Text style={{fontWeight: 'bold', fontSize: 19}}> R$ {valor}</Text>
        
   
   </Container>
  );
}