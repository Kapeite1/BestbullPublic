import React, { useContext }  from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { DrawerContentScrollView, createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

import {AuthContext} from '../contexts/auth';

const Drawer = createDrawerNavigator();

import AppRoutes from './app.routes';
import Settings from '../pages/Settings';
import Pedidos from '../pages/Pedidos';
import MeusPedidos from '../pages/MeusPedidos';


export default function AppRoutesDrawer() {

const {signOut, user} = useContext(AuthContext);

  function handleLogout() {
    signOut()
  }

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" style={{backgroundColor: 'red'}} labelStyle={{color: '#fff', fontWeight: 'bold'}}  onPress={() => handleLogout()} />
      </DrawerContentScrollView>
    );
  }

 return (
   
   <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}> 

       <Drawer.Screen
        name='Home'
        component={AppRoutes}
       />

        <Drawer.Screen
        name='Perfil'
        component={Settings}
       />

       {
       user.uid == 'fHWUOE4j7SZc8FbOYUvBm3B13dt2' ? 
       <Drawer.Screen
       name='Pedidos'
       component={Pedidos}
      />
      :
      null}

{
       user.uid == 'fHWUOE4j7SZc8FbOYUvBm3B13dt2' ? 
       null
      :
      <Drawer.Screen
       name='Meus Pedidos'
       component={MeusPedidos}
      />}
        
   </Drawer.Navigator>
  );
}