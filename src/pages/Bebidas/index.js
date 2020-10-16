import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';
import firebase from '../../services/firebaseConnection';

import { Container, List, ContainerModal, ModalView, TextModal } from './styles';
import Header from '../../components/Header';
import Bebida from '../../components/Bebida';

export default function Bebidas() {

  const [bebida, setBebida] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [ loading, setLoading] = useState(false)

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
      setLoading(true)
    }
    setLoading(false)
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
     {loading ? 
      <List
        showsVerticalScrollIndicator={false}
        data={bebida}
        keyExtractor={ item => item.id }
        renderItem={ ({item}) => ( <Bebida data={item} handleModal={handleModal} /> ) }
      /> 
      :
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={40} color='orange'/>   
      </View>
    }
   </Container>
  );
}