import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './src/Reducers/index';

import ClientInfo from './src/ScreensAll/ClientInfo';
import ListClients from './src/ScreensAll/ListClients.js';
import InputScreen from './src/ScreensAll/InputScreen';

const stack = createStackNavigator();

const store = createStore(combineReducers);

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={ListClients}
        />
        <stack.Screen
          name="ClientInfo"
          options={{ headerShown: false }}
          component={ClientInfo}
        />
        <stack.Screen
          name="InputScreen"
          options={{ headerShown: false }}
          component={InputScreen}
        />
       
      </stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
