import React, { Component } from 'react';
import {StyledFirebaseAuth} from 'react-firebaseui';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <p>Login</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}

const config = {
  apiKey: "AIzaSyBJ2xqz-SyseFXLd5b1WMYjD5DrllIWyrM",
  authDomain: "arvisual-ebcc4.firebaseapp.com",
  databaseURL: "https://arvisual-ebcc4.firebaseio.com",
  projectId: "arvisual-ebcc4",
  storageBucket: "arvisual-ebcc4.appspot.com",
  messagingSenderId: "422266920477"
}

// eslint-disable-next-line
const fbapp = firebase.initializeApp(config)

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: 'http://localhost:3000/#/home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};

export default Login;
