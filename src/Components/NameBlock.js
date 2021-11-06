import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function NameBlock({title, onPress, style}) {
  return (
    <View style={styles.GreyBlock}>
       <Text style ={styles.Header}> {title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  GreyBlock: {
    height: 52,
    marginTop: 23,
    paddingTop:11,
    width: '100%',
    backgroundColor: '#C4C4C4',
  },

   Header: {
    fontSize: 20,
    fontWeight: 500,
    paddingLeft:16,
   },
});