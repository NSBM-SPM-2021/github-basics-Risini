import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA8kDvC48JY4tlBHPlvzFzwMM6xtFdO7q0",
    authDomain: "doctor-appointment-web-project.firebaseapp.com",
    projectId: "doctor-appointment-web-project",
    storageBucket: "doctor-appointment-web-project.appspot.com",
    messagingSenderId: "817415373900",
    appId: "1:817415373900:web:3c10b1e4e89ff030d5a0e9",
    measurementId: "G-EJVLJRFMB1"
  };

const firebaseDatabase = firebase.initializeApp(firebaseConfig);
export default firebaseDatabase;