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

var userRef = firebase.database().ref("users");

firebase
  .database()
  .ref(".info/connected")
  .on("value", function (snapshot) {
    // If we're not currently connected, don't do anything.
    if (snapshot.val() == false) {
      return;
    }

    // If we are currently connected, then use the 'onDisconnect()'
    // method to add a set which will only trigger once this
    // client has disconnected by closing the app,
    // losing internet, or any other means.
    userRef
      .onDisconnect()
      .update(userRef.value() - 1)
      .then(function () {
        // The promise returned from .onDisconnect().set() will
        // resolve as soon as the server acknowledges the onDisconnect()
        // request, NOT once we've actually disconnected:

        // We can now safely set ourselves as 'online' knowing that the
        // server will mark us as offline once we lose connection.
        userRef.update(userRef.value() + 1);
      });
  });

export { db, auth };
