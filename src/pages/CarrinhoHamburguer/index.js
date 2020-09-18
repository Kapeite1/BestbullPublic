import React, {useState, useEffect, useContext} from 'react';
import { View, Text, Keyboard } from 'react-native';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';
import MontandoHamburguer from '../../components/MontandoHamburguer';
import AdicionalHamburguer from '../../components/AdicionalHamburguer';

import { DismissKeyboard, Container, Adicionais, Title, List, Observacoes, Input, Botoes, Confirmar, Cancelar  } from './styles.js'

export default function CarrinhoHamburguer({ route, navigation }) {

  const {addCart} = useContext(AuthContext);
  const { data } = route.params;
  const [adicionais, setAdicionais] = useState([])
  const [observacao, setObservacao] = useState('')
  const [valor, setValor] = useState(data.valor)
  const [adicinaisSelecionados, setAdicionaisSelecionados] = useState(new Map())

  useEffect(() => {
    

    async function loadList() {
      await firebase.database().ref('AdicionaisHamburguer').on('value', (snapshot) => {
        setAdicionais([]);

        snapshot.forEach((childItem) => {
          
          let list = {
            key: childItem.key,
            nome: childItem.val().nome,
            valor: childItem.val().valor,  
          };

          setAdicionais(oldArray => [...oldArray, list])
        })
      })
    }
    
    loadList();
  }, [])
  
  function AumentarValor(valorAdicional, adicional, quantidade) {
    let soma = parseFloat(valor) + parseFloat(valorAdicional);
    setValor(soma.toFixed(2))
    let newMap = adicinaisSelecionados
    newMap.set(adicional, quantidade)
    setAdicionaisSelecionados(newMap);

    
  }

  function DiminuirValor(valorAdicional, adicional) {
    let subtracao = parseFloat(valor) - parseFloat(valorAdicional);
    setValor(subtracao.toFixed(2))
  }

  function confirmarHamburguer() {
    console.log(adicinaisSelecionados.entries())
    var info = 'Adicional: ';
    for (var [key, value] of adicinaisSelecionados.entries()) {
      let text = value + " x " + key
      info += text + ' | '
    }
    info += 'Obs.: ' + observacao

    addCart(data.nome, valor, info)
    navigation.popToTop()
  }

 return (
    <DismissKeyboard onPress={() => Keyboard.dismiss()}>
      <Container>
      <Header name='Sanduiches'/>
      <MontandoHamburguer data={data} valor={valor}/>
      
      <Adicionais>
        <Title>Adicionais</Title>
        <List
          showsVerticalScrollIndicator={false}
          data={adicionais}
          keyExtractor={ item => item.id }
          renderItem={ ({item}) => ( <AdicionalHamburguer data={item} funcaoSoma={AumentarValor} funcaoSubtrair={DiminuirValor} /> ) }
        />
      </Adicionais>

      <Observacoes>
        <Title>Observações</Title>
        <Input
        placeholder='Exemplo: Sem salada...'
        autoCorrect={false}
        autoCapitalize='none'
        value={observacao}
        onChangeText={(text) => setObservacao(text)}
        />
      </Observacoes>

      <Botoes>
        <Confirmar onPress= {() => confirmarHamburguer()}>
          <Text style={{fontSize: 22, marginLeft: 10, marginRight: 10}}> Confirmar</Text>
        </Confirmar>
        <Cancelar onPress= {() => navigation.popToTop()}>
          <Text style={{fontSize: 22, marginLeft: 10, marginRight: 10}}>Cancelar</Text>
        </Cancelar>
      </Botoes>
      </Container>
      
      
    </DismissKeyboard>
  );
}