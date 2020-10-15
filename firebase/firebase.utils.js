import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBLMUqoFzEJDcbp5weBzWqpe-a2nIzmuq0',
  // authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  // databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'list-app-270e3',
  // storageBucket: 'your-project-id-1234.appspot.com',
  // messagingSenderId: '12345-insert-yourse',
  appId: '1:246515251106:ios:fedec30c2bce2ec167e4fb',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
