
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD6MuCFmNOkehAPdRjI0JbEmkIWt0JM7K0",
    authDomain: "deportivo-89801.firebaseapp.com",
    databaseURL: "https://deportivo-89801-default-rtdb.firebaseio.com",
    projectId: "deportivo-89801",
    storageBucket: "deportivo-89801.appspot.com",
    messagingSenderId: "733735732661",
    appId: "1:733735732661:web:b0ed5b067aa1483c3745fc",
    measurementId: "G-6GTZ4PV72J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();