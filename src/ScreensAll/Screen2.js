import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

export default function NameBlock2({title, onPress, style}) {
  return (
    <View style={styles.style1}>

     </View>
   );
 }

const styles = StyleSheet.create({
  style1: {
    flex:1,
    backgroundColor: 'yellow',
  },

   
});