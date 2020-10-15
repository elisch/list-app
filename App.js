/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import store from './redux/store';

import SignInAndSignUp from './screens/sign-in-and-sign-up/sign-in-and-sign-up.screen';
import Home from './screens/home/home.screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="SignIn">
              {() => <SignInAndSignUp type="signIn" />}
            </Stack.Screen>
            <Stack.Screen name="SignUp">
              {() => <SignInAndSignUp type="signUp" />}
            </Stack.Screen>
            <Stack.Screen name="Home">{() => <Home />}</Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
