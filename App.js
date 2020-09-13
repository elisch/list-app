/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';

import SignInAndSignUp from './screens/sign-in-and-sign-up/sign-in-and-sign-up.screen';
import Home from './screens/home/home.screen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignInAndSignUp">{() => <SignInAndSignUp/>}</Stack.Screen>
          <Stack.Screen name="Home">{() => <Home />}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
