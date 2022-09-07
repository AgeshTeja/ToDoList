import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBrhVAWfcpnjDQjgvj62vav4yN1q2bNaH0",
    authDomain: "todolist-agesh.firebaseapp.com",
    projectId: "todolist-agesh",
    storageBucket: "todolist-agesh.appspot.com",
    messagingSenderId: "558527171052",
    appId: "1:558527171052:web:8761f4796d97e12f2418c9"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const provider = new firebase.auth.GoogleAuthProvider();
  const db = firebase.firestore();
  const auth = firebase.auth();
  export {db , provider ,auth} ;
