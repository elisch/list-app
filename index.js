/**
 * @format
 */
import React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import App from './App';
import {name as appName} from './app.json';
import store from './redux/store';

const Stack = createStackNavigator();

const app = () => (
  <Provider store={store}>
    <StatusBar barStyle="dark-content" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App">
          {({navigation}) => <App navigation={navigation} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

AppRegistry.registerComponent(appName, () => app);
