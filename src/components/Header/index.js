import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container } from './styles';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import {AuthContext} from '../../contexts/auth';


export default function Header(props) {

    const navigation = useNavigation();
    const {signOut} = useContext(AuthContext);

    function handleLogout() {
      signOut()
    }
    
 return (
    <Container>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name='menu' color='#000' size={30} />
        </TouchableOpacity>
        <Text style={{ color: 'green'}}> {props.name}</Text>
    </Container>
  );
}