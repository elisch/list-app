import React from 'react';
import {ScrollView, View, Text, TouchableHighlight, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

import {firebase} from '../../firebase/firebase.utils';
import {setCurrentUser} from '../../redux/user/user.action';

import TextInput from '../../components/textInput/TextInput';
import Button from '../../components/button/button.component';
import styles from './sign-in-and-sign-up.styles.js';
import commonStyles from '../../assets/commonStyles.js';

const SignInAndSignUp = ({type, dispatch}) => {
  const [name, onNameChange] = React.useState('');
  const [password, onPasswordChange] = React.useState('');
  const [confirmPassword, onConfirmPasswordChange] = React.useState('');
  const [email, onEmailChange] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [buttonIsDisabled, setButtonIsDisabled] = React.useState(false);
  const navigation = useNavigation();

  const saveUserProfile = async (response) => {
    const uid = response.user.uid;
    const userRef = firebase.firestore().doc(`users/${uid}`);
    const usersRef = firebase.firestore().collection('users');
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const createdAt = new Date();
      const userData = {
        id: uid,
        email,
        name,
        createdAt,
      };

      usersRef
        .doc(uid)
        .set(userData)
        .then(() => navigation.navigate('Home'))
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
          setButtonIsDisabled(false);
        });
    }
  };

  const handleSignUp = () => {
    setLoading(true);
    setButtonIsDisabled(true);

    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match");
      setLoading(false);
      return;
    }

    if (name.length < 2) {
      setErrorMessage('Name must not be null.');
      setLoading(false);
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        if (response.user) {
          saveUserProfile(response);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
        setButtonIsDisabled(false);
      });
  };

  const handleSignIn = () => {
    setLoading(true);
    setButtonIsDisabled(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res && res.user) {
          const userId = res.user.uid;

          getUserProfile(userId).then((userProfile) => {
            if (userProfile) {
              dispatch(
                setCurrentUser({
                  ...userProfile,
                }),
              );
              navigation.navigate('Home');
            }
          });
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false);
        setButtonIsDisabled(false);
      });
  };

  const getUserProfile = async (id) => {
    var docRef = firebase.firestore().collection('users').doc(id);

    const userProfile = docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          return doc.data();
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.error('Error getting user profile document:', error);
      });

    return userProfile;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.welcome}>
          {type === 'signIn' ? 'Welcome back' : 'Welcome!'}
        </Text>
        <Text style={styles.signIn}>
          {type === 'signIn' ? 'Sign In' : 'Sign Up'}
        </Text>
        <View style={styles.box}>
          {type === 'signUp' ? (
            <TextInput
              onChange={(text) => onNameChange(text)}
              value={name}
              label="Name:"
            />
          ) : null}
          <TextInput
            onChange={(text) => onEmailChange(text)}
            value={email}
            label="Email:"
          />
          <TextInput
            onChange={(text) => onPasswordChange(text)}
            value={password}
            label="Password:"
          />
          {type === 'signUp' ? (
            <TextInput
              onChange={(text) => onConfirmPasswordChange(text)}
              value={confirmPassword}
              label="Confirm Password:"
            />
          ) : null}
          {type === 'signIn' ? (
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          ) : null}

          <Button
            onPress={type === 'signUp' ? handleSignUp : handleSignIn}
            loading={loading}
            style={{minWidth: 200}}
            label={
              loading ? 'Loading' : type === 'signIn' ? 'Sign in' : 'Sign up'
            }
            disable={buttonIsDisabled}
          />
          <Text style={commonStyles.errorText}>{errorMessage}</Text>
        </View>
        <TouchableHighlight
          onPress={() =>
            navigation.navigate(type === 'signIn' ? 'SignUp' : 'SignIn')
          }>
          <Text style={styles.newAccountButton}>
            {type === 'signIn' ? 'Or create a new account' : 'Or sign in'}
          </Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

SignInAndSignUp.propTypes = {
  type: PropTypes.string,
};

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(SignInAndSignUp);
