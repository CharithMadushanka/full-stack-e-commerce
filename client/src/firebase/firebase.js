import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCbpjPWDdWmjnKSHfuLEmfTeHHVP7JLUhI",
  authDomain: "ecommerce-b8a8a.firebaseapp.com",
  databaseURL: "https://ecommerce-b8a8a.firebaseio.com",
  projectId: "ecommerce-b8a8a",
  storageBucket: "",
  messagingSenderId: "644997876793",
  appId: "1:644997876793:web:c439db9cf672c4a69151e8"
});

export default app;