import React, {useState, useContext} from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import { Background, Container, BrandImg, BrandText, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';


export default function SignIn() {
  
  const navigation = useNavigation(); //instanciando o navigation para funcionar.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = useContext(AuthContext);

  function handleSignIn(){
    signIn(email, password.toLowerCase())
  }

 return (
   <Background source={require('../../assets/fundo.png')}>
    <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}//utilizando para subir a imagem apos abrir o teclado
     enabled >
      <BrandImg source={require('../../assets/logo.png')}/>

      <BrandText>
        Best Bull
      </BrandText>
    
      <AreaInput>

        <Input
        placeholder='Email'
        autoCorrect={false}
        autoCapitalize='none'
        value={email}
        onChangeText={(text) => setEmail(text)}
        />

        <Input
        placeholder='Senha'
        autoCorrect={false}
        autoCapitalize='none'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        />

        <SubmitButton onPress={() => handleSignIn()}>
          <SubmitText> Acessar </SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Não possui conta? Cadastre-se</LinkText>
        </Link>

      </AreaInput>
      
    </Container>
   </Background>
   
  );
}