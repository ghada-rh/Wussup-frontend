import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB9KVV59FnjaR0KFF6zqZ7_PzJmdmF3L-w",
    authDomain: "whatsapp-mern-f1384.firebaseapp.com",
    projectId: "whatsapp-mern-f1384",
    storageBucket: "whatsapp-mern-f1384.appspot.com",
    messagingSenderId: "859962557589",
    appId: "1:859962557589:web:8e93060d35f4779c04c79c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
export { auth, provider};
export default db;