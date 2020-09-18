import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';

export default function Sobremesas() {
 return (
   <View style={{flex: 1}}>
      <Header name='Sobremesas'/>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={{fontSize: 45, fontWeight: 'bold', textAlign: 'center', color: 'purple'}}>Sobremesas em breve</Text>
      </View>  
      
   </View>
  );
}