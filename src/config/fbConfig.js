import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4c5WAJlywX2UQepep2new5U2fdpi-gSM",
  authDomain: "pro-manage-pm-tool.firebaseapp.com",
  projectId: "pro-manage-pm-tool",
  storageBucket: "pro-manage-pm-tool.appspot.com",
  messagingSenderId: "954069378446",
  appId: "1:954069378446:web:1660a4c2b582be9d82b0df",
  measurementId: "G-FXC48EZGR8"
};

export const rrfConfig = {
  useFirestoreForProfile: true,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;