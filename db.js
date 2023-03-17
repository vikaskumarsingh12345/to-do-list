//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";



const firebaseConfig = {
    apiKey: "AIzaSyA-IMnWvnCTKKvOQG8LcUKrh-sKc26gyGY",
    authDomain: "todo-6385d.firebaseapp.com",
    projectId: "todo-6385d",
    storageBucket: "todo-6385d.appspot.com",
    messagingSenderId: "1056952426650",
    appId: "1:1056952426650:web:ed7f411ca34f1555a53f23",
    measurementId: "G-W2KGYJE95E"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();