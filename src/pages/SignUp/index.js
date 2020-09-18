import React, { useState, useContext } from 'react';
import {View, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';


import { Background, Container, Header, BrandImg, Title, Formulario, Input, InputHalf, ButtonRegister, ButtonRegisterText, Link, LinkText } from './styles';

export default function SignUp() {

  const navigation = useNavigation(); //instanciando o navigation para funcionar.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [reference, setReference] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);
  
  //quando clicar no cadastrar entra nessa funcao
  function handleSignUp(){
    signUp(name, email, phone, password, street, number, neighborhood, reference);
  }


 return (
   <Background source={require('../../assets/testeeee.png')}>
    <Container>
      <Header>

        <BrandImg source={require('../../assets/logo2.png')}/>

        <Title>
          Cadastro
        </Title>

      </Header>

      <View style={{ flex: 4, width: '100%', alignItems: 'center'}}>

        <Formulario>

          <Input
          placeholder='Nome Completo'
          autoCorrect={false}
          autoCapitalize='none'
          value={name}
          onChangeText={(text) => setName(text)}
          />

          <Input 
          placeholder='Email'
          autoCorrect={false}
          autoCapitalize='none'
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType= 'email-address'
          />

          <Input 
          placeholder='Nº Celular'
          autoCorrect={false}
          autoCapitalize='none'
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType= 'numeric'
          />

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between"}}>

            <InputHalf
            placeholder='Senha'
            autoCorrect={false}
            autoCapitalize='none'
            value={password}
            onChangeText={(text) => setPassword(text)}
            />

            <InputHalf
            placeholder='Confirmar Senha'
            autoCorrect={false}
            autoCapitalize='none'
            value={confPassword}
            onChangeText={(text) => setConfPassword(text)}
            />

          </View>

          <Input
          placeholder='Rua'
          autoCorrect={false}
          autoCapitalize='none'
          value={street}
          onChangeText={(text) => setStreet(text)}
          />

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between"}}>
          
            <InputHalf
            placeholder='Nº da casa'
            autoCorrect={false}
            autoCapitalize='none'
            value={number}
            onChangeText={(text) => setNumber(text)}
            keyboardType='numeric'
            />

            <InputHalf
            placeholder='Bairro'
            autoCorrect={false}
            autoCapitalize='none'
            value={neighborhood}
            onChangeText={(text) => setNeighborhood(text)}
            />

          </View>
      
          <Input
          placeholder='Referência'
          autoCorrect={false}
          autoCapitalize='none'
          value={reference}
          onChangeText={(text) => setReference(text)}
          />

        </Formulario>

        <View style={{ width: '100%', alignItems: 'center', marginTop: 10, marginBottom: 10}}>

          <ButtonRegister onPress={() => handleSignUp()}>
            {
              loadingAuth ? 
              (
                <ActivityIndicator size={20} color='#fff'/>
              ) :
              (
                <ButtonRegisterText>Cadastrar</ButtonRegisterText>
              )
            }
            
          </ButtonRegister>

          <Link onPress={() => navigation.navigate('SignIn')}>
            <LinkText>Já possuo cadastro!</LinkText>
          </Link>

        </View>

      </View>

     </Container>

   </Background>
  );
}