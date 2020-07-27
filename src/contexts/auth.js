import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);


    //verificar se possui usuario logado.
    useEffect(() => {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if (storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, []);

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
                    email: value.user.email
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

    async function signUp(name, email, password, street, number, neighborhood, reference) {
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async (value) => {
            let uid = value.user.uid;
            console.log('foi 1')
            await firebase.database().ref('users').child(uid).set({
                name: name,
                street: street,
                number: number,
                neighborhood: neighborhood,
                reference: reference
            })
            .then(() => {
                let data = {
                    uid: uid,
                    name: name,
                    email: email
                };
                console.log('foi 2')
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
        <AuthContext.Provider value={{ signed: !!user, loadingAuth, loading, signUp, signOut, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;