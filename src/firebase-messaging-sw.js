importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


firebase.initializeApp({
  'messagingSenderId': 'AIzaSyCvstdxMEP4JSZwCJNQsccFkI-HguTv97Y'
});

const messaging = firebase.messaging();