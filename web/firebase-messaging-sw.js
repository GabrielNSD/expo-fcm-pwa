importScripts('https://www.gstatic.com/firebasejs/7.22.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.22.1/firebase-messaging.js');
importScripts("https://www.gstatic.com/firebasejs/7.22.1/firebase-analytics.js");

firebase.initializeApp({
    apiKey: "xxxxxxxxxxxxxxxxxxxx",
    authDomain: "project.firebaseapp.com",
    databaseURL: "https://project.firebaseio.com",
    projectId: "projectId",
    storageBucket: "project.appspot.com",
    messagingSenderId: "00000000000000",
    appId: "xxxxxxxxxxxxxxxxxxxxx",
    measurementId: "G-XXXXXXX"
});

const messaging = firebase.messaging();

