import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCZhP_uzL1X8-SR6haGgAl7FVme41tmhlk",
    authDomain: "vuejs-73066.firebaseapp.com",
    databaseURL: "https://vuejs-73066.firebaseio.com",
    projectId: "vuejs-73066",
    storageBucket: "vuejs-73066.appspot.com",
    messagingSenderId: "1054990561939",
    appId: "1:1054990561939:web:3416886efc86409f535366",
    measurementId: "G-ECTKQJHPL4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();