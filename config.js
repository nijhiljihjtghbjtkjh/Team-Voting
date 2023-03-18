import firebase from "firebase";

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyA8RWWDt9y3gydsyRxO7dV0OJRPQHaSW5I",
  authDomain: "team-voting-app-8cf13.firebaseapp.com",
  databaseURL: "https://team-voting-app-8cf13-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-8cf13",
  storageBucket: "team-voting-app-8cf13.appspot.com",
  messagingSenderId: "657888751090",
  appId: "1:657888751090:web:3ba3f691570f1a20298f6b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
