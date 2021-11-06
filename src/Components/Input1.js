import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Input1 ({title1, title2, onPress, style}) {
  return (
    
    <View style={styles.cont1}>
      <Text style ={styles.header}> {title1} </Text>
      <Text style ={styles.info}> {title2} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cont1: {
    height: 50,
    marginTop:4,
    justifyContent:"center", 
    padding:17,
  },
  header: {
  fontSize: 12,
  fontWeight: 400,
  color: 'black',
  },
  info: {
  fontSize: 16,
  fontWeight: 400,
  color: 'black',
  },

});