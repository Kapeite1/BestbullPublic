import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Container, Foto, Imagem, Informações, Name, Ingredientes, Preco, Valor, Comprar} from './styles';
import firebase from '../../services/firebaseConnection';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
     
     <TouchableOpacity
     style={{flexDirection: 'row', alignItems: 'center', height: 100, alignSelf: 'stretch', padding: 6}}
     onPress={() => navigation.push('CarrinhoHamb', { data })}
     >
     <Foto>
            <Imagem source={{
          uri: url
        }}/>
        </Foto>
        
        <Informações>
            <Name>{data.nome}</Name>
            <Ingredientes>{data.ingredientes}</Ingredientes>
        </Informações>
        <Preco>
            <Valor>
                 R$ {data.valor}
            </Valor>
            <Comprar>
                <Icon name='shopping-cart' color='black' size={30}/>
            </Comprar>
        </Preco>
     </TouchableOpacity>
        
   
   </Container>
  );
}