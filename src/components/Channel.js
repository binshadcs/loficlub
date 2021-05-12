import React, { useEffect, useState } from "react";
import firebase from "firebase";

// components
import { Message } from ".";
import { Button, TextField, Tooltip } from "@material-ui/core";

// Icons
import { BiExit, BiSend } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";

// scroll to bottom automatic
import ScrollToBottom from "react-scroll-to-bottom";

const Channel = ({ user, db, signout, signInWithGoogle }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection("messages")
        .orderBy("createdAt", "asc")
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          // update messages
          setMessages(data);
        });

      // despatch
      return unsubscribe;
    }
  }, [db]);

  // send message on enter
  const checkEnter = (e) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  };

  // send message feature
  const sendMessage = () => {
    if (db) {
      if (text.replace(/\s/g, "") === "") {
        console.log("type something...");
      } else {
        db.collection("messages").add({
          text: text,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      }
    }
    setText("");
  };

  return (
    <div className="w-10/12 lg:w-6/12 h-[75%] lg:h-full mt-[12%] lg:mt-0">
      <div className="flex flex-col h-[80%]">
        <ScrollToBottom className="h-full w-full">
          {messages.map((message) => (
            <Message {...message} />
          ))}
        </ScrollToBottom>
      </div>
      <div className="w-full relative mt-5 p-2  pl-0 flex items-center justify-between bg-gradient-to-r from-[#00C9FF]  to-[#92FE9D] border border-[#4CD2D6] rounded-md mb-4 animate__animated animate__fadeInUp">
        {!user && (
          <div className="absolute h-full w-full z-10 bg-[#55555599]  rounded-md flex items-center justify-center">
            <div className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] rounded-md h-[65%] overflow-hidden">
              <Button
                className="track flex text-xl text-black"
                onClick={signInWithGoogle}
              >
                <span className="text-xl font-light flex items-center justify-center text-[#fff]">
                  SignIn With Google
                  <FaGoogle className="text-2xl ml-2" />
                </span>
              </Button>
            </div>
          </div>
        )}
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center w-full">
            {user && (
              <Tooltip title={user.displayName} arrow>
                <img
                  src={user.photoURL}
                  alt="Avatar"
                  className="rounded-md ml-2"
                  width={45}
                  height={45}
                />
              </Tooltip>
            )}

            <div className="ml-2 w-full rounded-md shadow-2xl ">
              <TextField
                label="Your Message"
                variant="filled"
                className="w-full bg-white rounded-md shadow-5xl"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => checkEnter(e)}
              />
            </div>

            <Button onClick={sendMessage}>
              <BiSend className="text-3xl text-[#111]" />
            </Button>
          </div>
          {user && (
            <div className="-mb-2 flex items-center justify-center">
              <Button className="track flex text-xl" onClick={signout}>
                <span className="text-lg font-light flex items-center justify-center">
                  Sign Out
                  <BiExit className="text-lg" />
                </span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Channel;
