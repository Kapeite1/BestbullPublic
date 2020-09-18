import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Modal } from 'react-native';
import firebase from '../../services/firebaseConnection';

import { Container, List, ContainerModal, ModalView, TextModal } from './styles';
import Header from '../../components/Header';
import Bebida from '../../components/Bebida';

export default function Bebidas() {

  const [bebida, setBebida] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('Produtos').child('Bebidas').on('value', (snapshot) => {
        setBebida([]);
        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            nome: childItem.val().nome,
            valor: childItem.val().valor,
            informacao: childItem.val().informacao,

          };

          setBebida(oldArray => [...oldArray, list])
          
        })
      })
    }
    loadList()
  }, [])

  function hideModal(){
    setTimeout(
      function (){
        setModalVisible(false)
      }, 750)
  }

  function handleModal(){
    setModalVisible(true)
    hideModal()
  }

 return (
   <Container>
     <Header name = 'Bebidas'/>
     <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
     >
        <ContainerModal>
          <ModalView>
            <TextModal>Produto Adicionado</TextModal>
          </ModalView>
        </ContainerModal>
     </Modal>
     <List
      showsVerticalScrollIndicator={false}
      data={bebida}
      keyExtractor={ item => item.id }
      renderItem={ ({item}) => ( <Bebida data={item} handleModal={handleModal} /> ) }
    />
   </Container>
  );
}