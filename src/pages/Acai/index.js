import React, {useState} from 'react';
import { View, Text, CheckBox, ScrollView } from 'react-native';

import Header from '../../components/Header';

import { Container, ContainerTamanho, ContainerOpcao, Opcoes, Botoes, Confirmar, Cancelar } from './styles'

import ContainerAdicional from '../../components/AdicionaisAcai';

export default function Acai() {
  const [tamanho, setTamanho] = useState('')

  const [options, setOptions] = useState([{
  key: 1,
  title: '100 ml',
  checked: false,
  disabled: false
},
{
  key: 2,
  title: '200 ml',
  checked: false,
  disabled: false
},
{
  key: 3,
  title: '300 ml',
  checked: false,
  disabled: false
},
{
  key: 4,
  title: '400 ml',
  checked: false,
  disabled: false
},
{
  key: 5,
  title: '500 ml',
  checked: false,
  disabled: false
},
{
  key: 6,
  title: '600 ml',
  checked: false,
  disabled: false
},
{
  key: 7,
  title: '700 ml',
  checked: false,
  disabled: false
}]);

const [coberturas, setCoberturas] = useState([{
  key: 1,
  title: 'Morango',
  checked: false
},
{
  key: 2,
  title: 'Brigadeiro',
  checked: false
},
{
  key: 3,
  title: 'Menta',
  checked: false
},
{
  key: 4,
  title: 'Tutifruti',
  checked: false
},
{
  key: 5,
  title: 'Uva',
  checked: false
},
{
  key: 6,
  title: 'Chocolate Branco',
  checked: false
},
{
  key: 7,
  title: 'Chocolate',
  checked: false
}]);

const [adicionais, setAdicionais] = useState([{
  key: 1,
  title: 'Amendoin',
  checked: false
},
{
  key: 2,
  title: 'Flocos de Arroz',
  checked: false
},
{
  key: 3,
  title: 'Granola',
  checked: false
},
{
  key: 4,
  title: 'Granulado de Brigadeiro',
  checked: false
},
{
  key: 5,
  title: 'Granulado Colorido',
  checked: false
},
{
  key: 6,
  title: 'Jujuba',
  checked: false
}]);

  

  function handleChange(e, nome){
    let newMarkers = options.map(el => (
      el.title === nome ? {...el, checked: e} : {...el, disabled: e}
    ))
    setOptions(newMarkers);
    setTamanho(nome);
  }

  

 return (
   <Container>
      <Header name='Açai'/>

      <ContainerTamanho>

        <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 8}}> Tamanhos:</Text>
        <ContainerOpcao>
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
        </ContainerOpcao>
       
      </ContainerTamanho>


      <ContainerAdicional adicionais={coberturas} setadicionais={setCoberturas} subtitle='Coberturas:'/>

      <ContainerAdicional adicionais={adicionais} setadicionais={setAdicionais} subtitle='Adicionais:'/>

      <Botoes>
        <Confirmar onPress= {() => alert('confirmou')}>
          <Text style={{fontSize: 22, marginLeft: 10, marginRight: 10}}> Confirmar</Text>
        </Confirmar>
        <Cancelar >
          <Text style={{fontSize: 22, marginLeft: 10, marginRight: 10}}>Cancelar</Text>
        </Cancelar>
      </Botoes>
      
   </Container>
  );
}