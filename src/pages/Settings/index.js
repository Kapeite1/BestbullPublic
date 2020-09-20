import React, { useContext } from 'react';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, ContainerName, Name, HomeButton, ContainerDados, Info, InfoTitle, InfoText } from './styles';

export default function Settings() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

 return (
   <Container>
     <LinearGradient
      colors={['#f1de61', '#f2ae22', '#e7a41d', '#c2aa20']}
      style={{flex: 0.4, justifyContent: 'center', alignItems: 'center', }}
     >
      <Name>Olá,</Name>
      <Name>{user.name}</Name>
      <HomeButton
        onPress={() => navigation.navigate('Home')}
      >
        <LinearGradient
          colors={['#f1de61', '#f2ae22', '#e7a41d', '#c2aa20']}
          style={{alignSelf: 'stretch', padding: 7, alignItems: 'center', borderRadius: 50, flexDirection: 'row', justifyContent: 'space-evenly'}}
        >
          <Icon name='chevrons-left' color='black' size={30}/>
          <Text style={{ fontSize: 17}}>Voltar para Início</Text>
        </LinearGradient>
      </HomeButton>
     </LinearGradient>
     <ContainerDados >
        <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 15}}>Informação da sua conta</Text>
        <Info>
          <Icon name='mail' color='black' size={27}/>
          <View style={{paddingLeft: 15}}>
            <InfoTitle>E-mail</InfoTitle>
            <InfoText>{user.email}</InfoText>
          </View>
        </Info>
        <Info>
          <Icon name='phone' color='black' size={27}/>
          <View style={{paddingLeft: 15}}>
            <InfoTitle>Telefone</InfoTitle>
            <InfoText>{user.phone}</InfoText>
          </View>
        </Info>
        <Info>
          <Icon name='home' color='black' size={27}/>
          <View style={{paddingLeft: 15}}>
            <InfoTitle>Endereço</InfoTitle>
            <InfoText>{user.street} , {user.neighborhood}, {user.number}</InfoText>
          </View>
        </Info>
        <Info>
          <Icon name='flag' color='black' size={27}/>
          <View style={{paddingLeft: 15}}>
            <InfoTitle>Referência</InfoTitle>
            <InfoText>{user.reference}</InfoText>
          </View>
        </Info>
     </ContainerDados>
   </Container>
  );
}