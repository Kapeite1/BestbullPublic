import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

import Sanduiches from '../pages/Sanduiches';
import Acai from '../pages/Acai';
import Bebidas from '../pages/Bebidas';
import Sobremesas from '../pages/Sobremesas';
import Carrinho from '../pages/Carrinho';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const icons = {
  Sanduiches: {
    name: 'hamburger'
  },
  Açai:{
    name: 'ice-cream'
  },
  Sobremesas:{
    name: 'ice-pop'
  },
  Bebidas:{
    name: 'glass-pint-outline'
  },
  Carrinho: {
    name: 'cart-minus'
  }
};

export default function AppRoutes() {
 return (
   <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon:({ color, size }) => {
        const { name } = icons[route.name];
        return <MaterialCommunityIcons name={name} color={color} size={size} />
      }
    })}
    tabBarOptions={{
      style:{
        backgroundColor: '#fff'
      },
      activeTintColor: 'green',
      inactiveTintColor: 'purple'
    }}
  >

       <Tab.Screen
        name='Sanduiches'
        component={Sanduiches}
       />

       <Tab.Screen
        name='Bebidas'
        component={Bebidas}
       />

      <Tab.Screen
        name='Carrinho'
        component={Carrinho}
       />

        <Tab.Screen
        name='Açai'
        component={Acai}
       />

        <Tab.Screen
        name='Sobremesas'
        component={Sobremesas}
       />

   </Tab.Navigator>
  );
}