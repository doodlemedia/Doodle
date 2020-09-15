import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyArxRzVKffVwJcfvq3dTYam7lUxH8ck1l4",
    authDomain: "doodle-media.firebaseapp.com",
    databaseURL: "https://doodle-media.firebaseio.com",
    projectId: "doodle-media",
    storageBucket: "doodle-media.appspot.com",
    messagingSenderId: "271291592412",
    appId: "1:271291592412:web:9486cec8e8d18a11b8ce19"
  });

var db = firebaseApp.firestore();

export { db };
