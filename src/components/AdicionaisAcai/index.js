import React, {useState} from 'react';
import { View, Text, CheckBox, ScrollView } from 'react-native';

import { ContainerCobertura, Cobertura } from './styles'

export default function AdicionaisAcai(props) {
    let adicionais = props.adicionais
    
    function handleChangeCobertura(e, nome){
        let newMarkers = adicionais.map(el => (
          el.title === nome ? {...el, checked: e} : {...el}
        ))
        props.setadicionais(newMarkers);
      }
  
      
 return (
    <ContainerCobertura>

    <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 8, marginBottom: 5}}> {props.subtitle}</Text>
    <ScrollView>
    {adicionais.map(item =>(
      <Cobertura>
        <CheckBox
        key={item.key}
        value={item.checked}
        onValueChange={(changed) => handleChangeCobertura(changed, item.title)}
        />
        <Text style={{color: 'black', fontSize: 16}}>{item.title}</Text>
      </Cobertura>
    ))}
    </ScrollView>
    
  </ContainerCobertura>
  );
}