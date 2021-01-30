import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDAPmz6vubQOJYIUc80bVcJPsebL2sJP80",
  authDomain: "tinder-clone-b5241.firebaseapp.com",
  projectId: "tinder-clone-b5241",
  storageBucket: "tinder-clone-b5241.appspot.com",
  messagingSenderId: "481896319964",
  appId: "1:481896319964:web:13a87284a97757322ddd19",
  measurementId: "G-RKXT9DB1FY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
