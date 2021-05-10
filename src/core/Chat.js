import React, { useEffect, useState } from "react";

// firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// components
import { Channel } from "../components";

// backend import
import { db, auth } from "../backend";

const Chat = () => {
  // storing user
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    // cleanup
    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  // signIn with Google
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.useDeviceLanguage();

    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  // sign out from all providers
  const signout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  if (initializing) return "Loading";

  return (
    <div className="flex items-center flex-col h-full pb-[10%]">
      <Channel
        user={user}
        db={db}
        signout={signout}
        signInWithGoogle={signInWithGoogle}
      />
    </div>
  );
};

export default Chat;
