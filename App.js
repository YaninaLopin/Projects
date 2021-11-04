import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './src/ScreensAll/Screen1';
import Screen2 from './src/ScreensAll/Screen2.js';

export default function App() {
  const Stack = createStackNavigator();

      return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen#1" component={Screen1} />
          <Stack.Screen name="Screen#2" component={Screen2} />
        </Stack.Navigator>
        </NavigationContainer>
      );
    }
    
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
