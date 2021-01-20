import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_DmEiLkCVq3fxGB975WoUzphhfeD7XD0",
  authDomain: "blog-site-bb018.firebaseapp.com",
  projectId: "blog-site-bb018",
  storageBucket: "blog-site-bb018.appspot.com",
  messagingSenderId: "899260587861",
  appId: "1:899260587861:web:07905abdaff3e0180999dc"
};

// init web app 'blog-site' on the firebase backend
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }