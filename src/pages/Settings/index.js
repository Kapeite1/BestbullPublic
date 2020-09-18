import React, { useContext } from 'react';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import { View, Text } from 'react-native';

export default function Settings() {

  const { signed, user } = useContext(AuthContext);

 return (
   <View>
       <Text>{user.name}</Text>
   </View>
  );
}