import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'

const Tab = createBottomTabNavigator();

import Sanduiches from '../pages/Sanduiches';
import Acai from '../pages/Acai';
import Bebidas from '../pages/Bebidas';
import Sobremesas from '../pages/Sobremesas';
import Carrinho from '../pages/Carrinho';
import CarrinhoHamb from '../pages/CarrinhoHamburguer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

console.disableYellowBox = true;

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

const Stack = createStackNavigator();

const SanduichesScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name='Sanduiches' component={Sanduiches} options={{headerShown: false}}/>
    <Stack.Screen name='CarrinhoHamb' component={CarrinhoHamb} options={{headerShown: false}}/>
  </Stack.Navigator>
)


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
      activeTintColor: 'orange',
      inactiveTintColor: 'black',
      keyboardHidesTabBar: true
    }}
  >

       <Tab.Screen
        name='Sanduiches'
        component={SanduichesScreen}
       />

       <Tab.Screen
        name='Bebidas'
        component={Bebidas}
       />

        <Tab.Screen
        name='Carrinho'
        component={Carrinho}
       />
   </Tab.Navigator>
  );
}