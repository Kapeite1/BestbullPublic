import React, {useState, useEffect, useContext} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Container, Foto, Imagem, Informações, Name, Ingredientes, Preco, Valor, Comprar} from './styles';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';

export default function Bebida( { data, handleModal }) {

  const {addCart} = useContext(AuthContext);

    const [url, setUrl] = useState('');

    useEffect(() => {
        async function getPhoto(data) { 
          await firebase.storage().ref('Bebidas').child(data.nome+'.jpg').getDownloadURL().then((url) => {
            setUrl(url);
          });
        }
        getPhoto(data);
      }, [])

    function pressShop(){
      addCart(data.nome, data.valor, data.informacao)
      handleModal()
    }
 return (
   <Container>
        <Foto>
            <Imagem source={{
          uri: url
        }}/>
        </Foto>
        
        <Informações>
            <Name>{data.nome}</Name>
            <Ingredientes>{data.informacao}</Ingredientes>
        </Informações>
        <Preco onPress={() => pressShop()}>
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