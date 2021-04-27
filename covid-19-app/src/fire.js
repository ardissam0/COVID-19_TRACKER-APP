import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBRF_3PxyeSxxuUciR4aPdrSfE1jIbEobA",
    authDomain: "covid-19-tracker-app-d7699.firebaseapp.com",
    databaseURL: "https://covid-19-tracker-app-d7699.firebaseio.com",
    projectId: "covid-19-tracker-app-d7699",
    storageBucket: "covid-19-tracker-app-d7699.appspot.com",
    messagingSenderId: "1076330382832",
    appId: "1:1076330382832:web:771f1293819cb3a2584935",
    measurementId: "G-3MDX530ELJ"
  };
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;