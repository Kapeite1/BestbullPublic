import React, { useContext }  from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { DrawerContentScrollView, createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

import {AuthContext} from '../contexts/auth';

const Drawer = createDrawerNavigator();

import AppRoutes from './app.routes';
import Settings from '../pages/Settings';


export default function AppRoutesDrawer() {

const {signOut} = useContext(AuthContext);

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
        
   </Drawer.Navigator>
  );
}