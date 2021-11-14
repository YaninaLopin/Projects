import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import ClientInfo from './src/ScreensAll/ClientInfo';
import ListClients from './src/ScreensAll/ListClients.js';
import InputScreen from './src/ScreensAll/InputScreen';

const stack = createStackNavigator();

export default function App() {
  return (
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
  );
}
