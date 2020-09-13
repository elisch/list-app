import React from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';

import ListIcon from '../../assets/icons/list.icon.js';

import styles from './sign-in-and-sign-up.styles.js';

const SignInAndSignUp = () => {
  const [usernameValue, onUsernameChange] = React.useState('');
  const [passwordValue, onPasswordChange] = React.useState('');
  const [emailValue, onEmailChange] = React.useState('');
  const [type, setScreenType] = React.useState('signIn');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <ListIcon /> */}
        <Text>Logo här</Text>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.welcome}>
          {type === 'signIn' ? 'Welcome back' : 'Welcome!'}
        </Text>
        <Text style={styles.signIn}>
          {type === 'signIn' ? 'Sign In' : 'Sign Up'}
        </Text>
        <View style={styles.box}>
          <Text style={styles.inputLabel}>Username:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => onUsernameChange(text)}
            value={usernameValue}
          />
          {type === 'signUp' ? (
            <>
              <Text style={styles.inputLabel}>Email:</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => onEmailChange(text)}
                value={emailValue}
              />
            </>
          ) : null}
          <Text style={styles.inputLabel}>Password:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => onPasswordChange(text)}
            value={passwordValue}
          />
          {type === 'signIn' ? (
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          ) : null}
          <TouchableHighlight style={styles.buttonWrapper}>
            <View style={styles.signInButton}>
              <Text style={styles.buttonText}>
                {type === 'signIn' ? 'Sign in' : 'Sign up'}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <TouchableHighlight onPress={() => setScreenType('signUp')}>
          <Text style={styles.newAccountButton}>Or create a new account</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}


export default SignInAndSignUp;
