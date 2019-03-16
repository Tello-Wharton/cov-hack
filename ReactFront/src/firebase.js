// Import the Firebase modules that you need in your app.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyBJ2xqz-SyseFXLd5b1WMYjD5DrllIWyrM",
  authDomain: "arvisual-ebcc4.firebaseapp.com",
  databaseURL: "https://arvisual-ebcc4.firebaseio.com",
  projectId: "arvisual-ebcc4",
  storageBucket: "arvisual-ebcc4.appspot.com",
  messagingSenderId: "422266920477"
}

const fbapp = firebase.initializeApp(config)

const db = firebase.database()
const auth = firebase.auth()
const firestore = firebase.firestore()
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);


export {firestore, auth, db };
export default fbapp;
