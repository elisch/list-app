import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyANlIj7e4dqcb8IbTEE9xH-biM6x1NFCVg',
  authDomain: 'listapp-b7162.firebaseapp.com',
  databaseURL: 'https://listapp-b7162.firebaseio.com',
  projectId: 'listapp-b7162',
  storageBucket: 'listapp-b7162.appspot.com',
  messagingSenderId: '919032492108',
  appId: '1:919032492108:web:9159a90005624e198c44e9',
  measurementId: 'G-SHSMFDEYTG',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const createUser = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('ärrrårrz', error);
    });
};

const listenForUser = (userAuth) => {

}

export default {createUser, listenForUser};
