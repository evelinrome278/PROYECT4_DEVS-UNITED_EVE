import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAFsuuNkJIn_KKZOKFIhUMH7ML8iFx1Y78",
    authDomain: "devunitedeve.firebaseapp.com",
    projectId: "devunitedeve",
    storageBucket: "devunitedeve.appspot.com",
    messagingSenderId: "824962039604",
    appId: "1:824962039604:web:4f659ace972c2711ed6f61"
  };

  firebase.initializeApp(firebaseConfig);

  export const firestore= firebase.firestore();
  export const storage= firebase.storage();
  export const auth= firebase.auth();
  export default firebase;