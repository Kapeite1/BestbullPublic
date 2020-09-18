import React, {useState, useContext, useEffect} from 'react';
import { View, Text, TextInput, CheckBox, ScrollView, Keyboard, Modal, ActivityIndicator, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../../components/Header';
import Produto from '../../components/ItemCarrinho';
import firebase from '../../services/firebaseConnection';

import { Container, Itens, Container1, Container2, Opcoes, Finalizar, AreaButton, ContainerModal, ModalView, TextModal, ModalCancelar, ModalConfirmar} from './styles'

export default function Carrinho() {

  const {pedido, acao, savePedido, uidAdm, deletList, handleAcao} = useContext(AuthContext);
  const [total, setTotal] = useState(0)
  const [taxa, setTaxa] =useState(3)
  const [ totalf, setTotalf] = useState(0)
  const [ troco, setTroco] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [selectModal, setSelectModal] =  useState(true)
  const [selectModalText, setSelectModalText] =  useState(false)
  const [options, setOptions] = useState([{
    key: 1,
    title: 'Dinheiro',
    checked: false,
    disabled: false
  },
  {
    key: 2,
    title: 'Cartão',
    checked: false,
    disabled: false
  }]);
  
  function handleChange(e, nome){
    let newMarkers = options.map(el => (
      el.title === nome ? {...el, checked: e} : {...el, disabled: e}
    ))
    setOptions(newMarkers);
  }

  async function finalizarPedido(){
    setSelectModal(false)
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    
    let dataUser = await AsyncStorage.getItem('Auth_user');
    dataUser = JSON.parse(dataUser)
    let keyAdm = await firebase.database().ref('users').child(uidAdm).push().key;
    let keyUser = await firebase.database().ref('users').child(dataUser.uid).push().key;
    let pedido = await AsyncStorage.getItem('@Pedido')
    pedido = JSON.parse(pedido)
    Keyboard.dismiss()
    if (pedido.length > 0) {
      await firebase.database().ref('users').child(dataUser.uid).child('pedidos').child(keyUser).child('dados').set({
        total: totalf,
        data: date.toString() + '/' + month.toString(),
        troco: troco,
        estado: 'enviado'
      })
      pedido.map( async (item) => (
        await firebase.database().ref('users').child(dataUser.uid).child('pedidos').child(keyUser).push().set({
          nome: item.nome,
          valor: item.valor,
          informacao: item.informacao
        })
      ))
      await firebase.database().ref('users').child(uidAdm).child('pedidos').child(keyAdm).set({
        uid: dataUser.uid,
        uidPedido: keyUser
      })  
      try {
        await AsyncStorage.removeItem('@Pedido');
        deletList()
        setTroco(0)
        setSelectModalText(true)
        hideModal()
        return true;
    }
    catch(exception) {
        return false;
    }

    } else {
      alert('Seu Carrinho está Vazio!')
      setModalVisible(!modalVisible)
    }

  }

  function calculandoValor() {
    //console.log('calculando')
    let total = 0
    pedido.map(item => (
      total += parseFloat(item.valor)
    ))
    setTotal(total.toFixed(2))
    setTotalf((total+3).toFixed(2))
  }

  useEffect(() => {
    calculandoValor();
    savePedido();
  }, [acao]);

  function handleModal(){
    setModalVisible(!modalVisible)
    
    
  }

  function hideModal(){
    setTimeout(
      function (){
        setModalVisible(false)
        setSelectModal(true)
        setSelectModalText(false)
      }, 2000)
  }

  function ModalView1() {
    return (
      <ContainerModal>
          <ModalView>
            <TextModal>Após finalizar, seu pedido não poderá ser cancelado.</TextModal>
            <View style={{alignSelf: 'stretch', flexDirection: 'row', justifyContent: "space-around"}}>
              <ModalConfirmar
                onPress={() => finalizarPedido()}
              >
                <Text style={{fontWeight: "bold", color: 'white', fontSize: 18}}>Confirmar</Text>
              </ModalConfirmar>
              <ModalCancelar
                onPress={() => handleModal()}
              >
                <Text style={{fontWeight: "bold", color: 'white', fontSize: 18}}>Cancelar</Text>
              </ModalCancelar>
            </View>
          </ModalView>
        </ContainerModal>
    );
  }

  function ModalView2() {
    return (
      <ContainerModal>
          {selectModalText ?

          <ModalView>
            <Text>Seu pedido foi enviado! Obrigado!</Text>
          </ModalView>

          :

          <ActivityIndicator size={30} color='lightblue'/>}

      </ContainerModal>
    );
  }

 return (
   <Container>
     <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
     >
       {selectModal ? <ModalView1/> : <ModalView2/>}
       
     </Modal>
    <Header name='Carrinho'/>
    <Container1>
    <Container2>
      <Text style={{fontSize: 19, fontWeight: 'bold'}}>Meu Pedido</Text>
      <ScrollView style={{height:130}}>
      {pedido.map(item => (
          <Produto item={item} nome={item.nome} valor={item.valor} info={item.informacao}/>
        ))}
      </ScrollView>

      <View>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
          <Text> Total do pedido:</Text>
          <Text> R$ {total}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
          <Text> Taxa de entrega:</Text>
          <Text> R$ {taxa.toFixed(2)}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
          <Text> Total:</Text>
          <Text> R$ {totalf}</Text>
        </View>
      </View>
    </Container2>
    <Container2>
    <Text style={{ fontSize:19, fontWeight: 'bold'}}>Forma de Pagamento</Text>
      {options.map(item => (
          <Opcoes>
            <CheckBox
            key={item.key}
            value={item.checked}
            onValueChange={(changed) => handleChange(changed, item.title)}
            disabled={item.disabled}
            />
            <Text style={{color: 'black', fontSize: 16}}>{item.title}</Text>
          </Opcoes>
        ))}
      {options.find(options => options.title === 'Dinheiro' ).checked ?
      <View >
        <Text >Troco para:</Text>
        <TextInput
        placeholder='50,00'
        autoCorrect={false}
        autoCapitalize='none'
        value={troco}
        onChangeText={(text) => setTroco(text)}
        keyboardType= {"number-pad"}
        />
      </View> : null}
    </Container2>
        
    </Container1>
    

    <AreaButton>
      <Finalizar onPress={() => handleModal()}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18}}>Finalizar Pedido</Text>
      </Finalizar>
    </AreaButton>
    
   </Container>
   
  );
}