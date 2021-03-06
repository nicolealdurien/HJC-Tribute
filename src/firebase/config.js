  import firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDgz18hW5XJnws7dxbPZS7q1hKvAzi0nNU",
    authDomain: "hjc-tribute.firebaseapp.com",
    projectId: "hjc-tribute",
    storageBucket: "hjc-tribute.appspot.com",
    messagingSenderId: "678811154295",
    appId: "1:678811154295:web:2176026f80ce47f49fd372"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectStorage, projectFirestore, timestamp }