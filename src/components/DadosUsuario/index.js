import React, { useContext, useState, useEffect } from 'react';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import { View, Text, TouchableOpacity, Modal, TextInput, Animated, Dimensions, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import { useFocusEffect, useNavigation } from '@react-navigation/native';


export default function DadosUsuario({ data }) {
  
  console.log(data)

 return (
   <View style={{flex: 1}}>
     <Text>teste</Text>
     
   </View>
  );
}