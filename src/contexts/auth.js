import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';
import { ProgressBarAndroidComponent } from 'react-native';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [uidAdm, setUidAdm] = useState('fHWUOE4j7SZc8FbOYUvBm3B13dt2')
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [pedido, setPedido] = useState([]);
    const [acao, setAcao] = useState(true);


    //verificar se possui usuario logado.
    useEffect(() => {
        console.log('useeffect')
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');
            const value = await AsyncStorage.getItem('@Pedido');
            if (storageUser){
                console.log('usuario logado')
                setUser(JSON.parse(storageUser));
            }
            if (value){
                console.log('tem pedido salvo')
                setPedido(JSON.parse(value));
            }
            setLoading(false);
        }
        loadStorage();
    }, []);

    function handleAcao(){
        console.log('foi')
        setAcao(!acao)
    }
    //adicionando um item no carrinho
    //async
    function addCart(nome, valor, info){
        let list = {
            nome: nome,
            valor: valor,
            informacao: info
        };
        setPedido(oldArray => [...oldArray, list])
        setAcao(!acao)
        //await AsyncStorage.setItem('@pedido', JSON.stringify(pedido));
    }

    //ao clicar no finalizar ele vai apagar a lista de pedido e executar o effect do acao.
    function deletList() {
        setPedido([])
        setAcao(!acao)
    }

    //deletando item selecionado

    function deletandoItem(data){
        //achando o index do elemento
        const elementsIndex = pedido.findIndex(element => element == data )
        //criando um array com o array anterior
        let newArray = [...pedido]
        //removendo o elemento do array
        newArray.splice(elementsIndex, 1); 
        //setando o novo array para a lista de pedido
        setPedido(newArray)
        setAcao(!acao)
    }
    
    //salvando o pedido do cliente no async
    async function savePedido(){
        try {
            await AsyncStorage.setItem('@Pedido', JSON.stringify(pedido));
        } catch (error) {
            // Error retrieving data
          }
    }


    

    //funcao para logar usuario
    async function signIn(email, password){
        setLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value) =>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot) => {
                let data = {
                    uid: uid,
                    name: snapshot.val().name,
                    email: value.user.email,
                    phone: value.user.phone
                };
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        })
        .catch(() => {
            alert(error.code)
            setLoadingAuth(false);
        })

    }

    //funcao para registrar usuario
    async function signUp(name, email, phone, password, street, number, neighborhood, reference) {
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                name: name,
                street: street,
                number: number,
                neighborhood: neighborhood,
                reference: reference,
                email: email,
                phone: phone
            })
            .then(() => {
                let data = {
                    uid: uid,
                    name: name,
                    email: email,
                    phone: phone
                };
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
            .catch(() => {
                alert(error.code);
                setLoadingAuth(false);
            })
        })
        .catch(() => {
            alert(error.code);
            setLoadingAuth(false);
        })
    }

    //Aqui ele salva o data no asyncstorage passando para string.
    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    //metodo para deslogar
    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(() => {
            setUser(null)
        })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, uidAdm, loadingAuth, loading, pedido, acao, handleAcao, deletList, signUp, signOut, signIn, addCart, savePedido, deletandoItem}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;