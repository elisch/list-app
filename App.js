/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import SignInAndSignUp from './screens/sign-in-and-sign-up/sign-in-and-sign-up.screen';
import Home from './screens/home/home.screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" options={{headerShown: false}}>
        {() => <SignInAndSignUp type="signIn" />}
      </Stack.Screen>
      <Stack.Screen name="SignUp" options={{headerShown: false}}>
        {() => <SignInAndSignUp type="signUp" />}
      </Stack.Screen>
      <Stack.Screen name="Home" options={{headerShown: false}}>
        {() => <Home />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(App);
