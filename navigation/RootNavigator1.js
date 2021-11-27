import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { useSelector } from 'react-redux';
import combineReducers from '../src/Reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


import ClientInfo from '../src/ScreensAll/ClientInfo';
import ListClients from '../src/ScreensAll/ListClients';
import InputScreen from '../src/ScreensAll/InputScreen';
import Registration from '../src/ScreensAll/Registration';

const Stack = createStackNavigator();

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//   }
  
// const persistedReducer = persistReducer(persistConfig, combineReducers);

// const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// let persistor = persistStore(store);

export default function RootNavigator({ navigation, route })  {
  const profileID = useSelector(state => state.profile.signedUp)  

  return (
      <Stack.Navigator> 
        {!profileID && (
        <Stack.Screen
          name="Registration"
          options={{ headerShown: false }}
          component={Registration}
        />)}
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={ListClients}
        />
        <Stack.Screen
          name="ClientInfo"
          options={{ headerShown: false }}
          component={ClientInfo}
        />
        <Stack.Screen
          name="InputScreen"
          options={{ headerShown: false }}
          component={InputScreen}
        />
       
      </Stack.Navigator>
  
  );
}