import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmgRSDTpe9p32B8edITOoDgpB2wkTU_0M",
  authDomain: "tubagus-signal-clone.firebaseapp.com",
  projectId: "tubagus-signal-clone",
  storageBucket: "tubagus-signal-clone.appspot.com",
  messagingSenderId: "163864819408",
  appId: "1:163864819408:web:5a4f30eb42391fcd7650d5"
};

let firebaseApp;

if (firebase.apps.length === 0) {
	firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
