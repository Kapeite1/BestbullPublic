import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import {AuthContext} from '../../contexts/auth';

import { Container, Logo, Tittle } from './styles';

export default function Header(props) {

    const navigation = useNavigation();
    const {signOut} = useContext(AuthContext);

    function handleLogout() {
      signOut()
    }
    
 return (
    <Container>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name='menu' color='black' size={35} />
        </TouchableOpacity>
        <Tittle> {props.name}</Tittle>
        <Logo source={require('../../assets/logo.png')}/>
    </Container>
  );
}