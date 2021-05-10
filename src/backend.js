import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCcq_ehL1S1ybwZ_KPSs_2r_mb3VRUvSUA",
  authDomain: "lofi-chat.firebaseapp.com",
  projectId: "lofi-chat",
  storageBucket: "lofi-chat.appspot.com",
  messagingSenderId: "877788630630",
  appId: "1:877788630630:web:11c720c92827449ebbe7a7",
  measurementId: "G-FRL5E54HR8",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
