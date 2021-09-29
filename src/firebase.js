import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYQGYlU3SiL9oKBKx19sR5BxwEPL9z09s",
  authDomain: "doctor-appointment-web-a-1d65f.firebaseapp.com",
  projectId: "doctor-appointment-web-a-1d65f",
  storageBucket: "doctor-appointment-web-a-1d65f.appspot.com",
  messagingSenderId: "452857868945",
  appId: "1:452857868945:web:b787a3ccbfd7dd64e8c530",
  measurementId: "G-CL2B4WMGZW"
};

firebase.initializeApp(firebaseConfig);

export default firebase;