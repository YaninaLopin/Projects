import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export default function RedTop({ title, style}) {
  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.red1}>
      </View>
      <TouchableOpacity
        style={[styles.red2, styles.shadow]} 
        onPress={() => navigation.goBack()}>
        <Text style={styles.header}> {title} </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
  },

  red1: {
    alignItems: 'flex-start',
    height: 24,
    width: '100%',
    backgroundColor: '#C10000',
  },
  red2: {
    height: 56,
    backgroundColor: '#E02329',
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 16,
    paddingTop: 16,
    color: "white",
  },
});
