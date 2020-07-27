import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyA5svnun6qe0lzzyVA06_xeJ5TINxmON1Y",
    authDomain: "esquina-do-acai.firebaseapp.com",
    databaseURL: "https://esquina-do-acai.firebaseio.com",
    projectId: "esquina-do-acai",
    storageBucket: "esquina-do-acai.appspot.com",
    messagingSenderId: "933176906605",
    appId: "1:933176906605:web:55a1a5403e74a0d3ca0064",
    measurementId: "G-NV6H0RQZXQ"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;