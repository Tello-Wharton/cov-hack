const express = require('express')
const firebase = require("firebase");
var cors = require('cors')
require("firebase/firestore");
const bodyParser = require('body-parser');


const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// var serviceAccount = require('./priceordeal-2acf51b7d3af.json');
//
// firebase.initializeApp({
//     apiKey: "AIzaSyBFLTTB4AehpfgfnkAgTUSoBHh4G00AVPU",
//     authDomain: "priceordeal.firebaseapp.com",
//     databaseURL: "https://priceordeal.firebaseio.com",
//     projectId: "priceordeal",
//     storageBucket: "gs://priceordeal.appspot.com",
//     messagingSenderId: "285674242766"
// });
//
// var db = firebase.firestore();
// db.settings({
//   timestampsInSnapshots: true
// });
