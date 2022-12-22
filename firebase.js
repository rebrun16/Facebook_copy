import { initializeApp } from "firebase/app";
import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAiZTjfPUlpw6L2oVQCxAx5FLb50fHuDP4",
  authDomain: "facebook-fe853.firebaseapp.com",
  projectId: "facebook-fe853",
  storageBucket: "facebook-fe853.appspot.com",
  messagingSenderId: "158093182974",
  appId: "1:158093182974:web:5cc0d7af23069ca10262af"
};

const app = !firebase.apps.lenght ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage};