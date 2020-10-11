import firebase from "firebase/app";
import "@firebase/messaging";

const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxx",
  authDomain: "project.firebaseapp.com",
  databaseURL: "https://project.firebaseio.com",
  projectId: "projectId",
  storageBucket: "project.appspot.com",
  messagingSenderId: "00000000000000",
  appId: "xxxxxxxxxxxxxxxxxxxxx",
  measurementId: "G-XXXXXXX",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
