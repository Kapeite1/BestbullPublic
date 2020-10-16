import React, { useContext, useState, useEffect } from 'react';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import { View, Text, TouchableOpacity, Modal, TextInput, Animated, Dimensions, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Container, Name, HomeButton, ContainerDados, Info, InfoTitle, InfoText, ButtonEdit, InfoEmail, ContainerModal, ModalView, ModalConfirmar, ModalCancelar } from './styles';

export default function Settings() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [ modalVisible, setModalVisible ] = useState(false)
  const [novoValor, setNovoValor ] = useState('')
  const [novoBairro, setNovoBairro ] = useState('')
  const [novoNumero, setNovoNumero ] = useState('')
  const [ alterar, setAlterar ] = useState('')
  const [ dados, setDados ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ alterou, setAlterou ] = useState(false)

  

  function Informacao(props) {
    return (
      <Info>
        <View style={{ flexDirection: 'row', width: '80%'}}>
          <Icon name={props.icon} color='black' size={27}/>
          <View style={{paddingLeft: 15}}>
            <InfoTitle>{props.title}</InfoTitle>
            <InfoText>{props.text}</InfoText>
          </View>
        </View>
        <ButtonEdit
          onPress={() => (ShowModal(props.title))}
          >
          <Icon name='edit' color='gray' size={23}/>
        </ButtonEdit>
      </Info>
    );
  }

  function ShowModal(title){
    setAlterar(title)
    setModalVisible(true)
  }

  async function PegaDados() {
    await firebase.database().ref('users').child(`${user.uid}`).once('value', (snapshot) => {
      setDados([])
      var info = {
        nome: snapshot.val().name,
        email: snapshot.val().email,
        bairro: snapshot.val().neighborhood,
        numero: snapshot.val().number,
        telefone: snapshot.val().phone,
        referencia: snapshot.val().reference,
        rua: snapshot.val().street
      }
      setDados(oldArray => [...oldArray, info])
    })
    setLoading(true)
  }
  
  function AlterarDados() {
    if ( novoValor === ''){
      alert('Preencha o campo')
      return;
    } else if (alterar === 'Telefone') {
      firebase.database().ref('users').child(`${user.uid}`).child('phone').set(novoValor)
    } else if (alterar === 'Referência') {
      firebase.database().ref('users').child(`${user.uid}`).child('reference').set(novoValor)
    } else {
      if ( novoBairro === '' || novoNumero === '') {
        alert('Preencha todos os campos')
        return;
      } else {
        firebase.database().ref('users').child(`${user.uid}`).child('street').set(novoValor)
        firebase.database().ref('users').child(`${user.uid}`).child('neighborhood').set(novoBairro)
        firebase.database().ref('users').child(`${user.uid}`).child('number').set(novoNumero)
      }
      
    }
    
    setNovoValor('')
    setNovoNumero('')
    setNovoBairro('')
    setModalVisible(false)
    setAlterou(!alterou)
  }

  function CancelarAlteracao() {
    setNovoValor('')
    setNovoNumero('')
    setNovoBairro('')
    setModalVisible(false)
  }
  
  useFocusEffect(
    React.useCallback(() => {
      setLoading(false)
      PegaDados();
    }, [alterou])
  )

 return (
   <Container>
     {loading ? <View style={{flex:1}}>
       <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
     >
        <ContainerModal>
          <ModalView>
            {alterar === 'Referência' ? <Text>Digite sua nova {alterar}:</Text> : <Text>Digite seu novo {alterar}:</Text>}
            <TextInput
              style={{ height: 40, width: '90%', borderBottomColor: 'gray', borderBottomWidth: 1, marginBottom: 10 }}
              onChangeText={(text) => setNovoValor(text)}
              value={novoValor}
              autoFocus={true}
              keyboardType={alterar === 'Telefone' ? 'number-pad': null}
              placeholder={alterar === 'Endereço' ? 'Rua' : `${alterar}`}
            />
            { alterar === 'Endereço' ? <TextInput
              style={{ height: 40, width: '90%', borderBottomColor: 'gray', borderBottomWidth: 1, marginBottom: 10 }}
              onChangeText={(text) => setNovoBairro(text)}
              placeholder={'Bairro'}
              value={novoBairro}
            /> : null }

            { alterar === 'Endereço' ? <TextInput
              style={{ height: 40, width: '90%', borderBottomColor: 'gray', borderBottomWidth: 1, marginBottom: 10 }}
              onChangeText={(text) => setNovoNumero(text)}
              placeholder={'Número'}
              value={novoNumero}
              keyboardType={'number-pad'}
            /> : null }

            <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
            <ModalConfirmar
              onPress={() => AlterarDados()}
            >
              <Text style={{fontWeight: "bold", color: 'white', fontSize: 18}}>Salvar</Text>
            </ModalConfirmar>
            <ModalCancelar
              onPress={() => CancelarAlteracao()}
            >
              <Text style={{fontWeight: "bold", color: 'white', fontSize: 18}}>Cancelar</Text>
            </ModalCancelar>
            </View>
            
          </ModalView>
        </ContainerModal>
     </Modal>
     <LinearGradient
     colors={['#f1de61', '#f2ae22', '#e7a41d', '#c2aa20']}
     style={{flex: 0.4, justifyContent: 'center', alignItems: 'center', }}
    >
      
     <Name>Olá,</Name>
     <Name>{dados[0].nome}</Name>
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
      <View style={{marginBottom: 15}}>
       <Text style={{fontWeight: 'bold', fontSize: 20}}>Informação da sua conta</Text>
      </View>
      <InfoEmail>
         <Icon name='mail' color='black' size={27}/>
         <View style={{paddingLeft: 15}}>
           <InfoTitle>Email</InfoTitle>
           <InfoText>{dados[0].email}</InfoText>
         </View>
       </InfoEmail>
       <Informacao icon='phone' title='Telefone' text={dados[0].telefone}/>
       <Informacao icon='home' title='Endereço' text={dados[0].rua+', ' + dados[0].bairro+', ' + dados[0].numero }/>
       <Informacao icon='flag' title='Referência' text={dados[0].referencia}/>
    </ContainerDados> 
    </View> 
    : <ActivityIndicator size={40} color='orange'/>   }    
   </Container>
  );
}