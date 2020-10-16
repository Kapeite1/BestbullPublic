import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "**",
    authDomain: "**",
    databaseURL: "**",
    projectId: "**",
    storageBucket: "**",
    messagingSenderId: "**",
    appId: "**",
    measurementId: "**"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;