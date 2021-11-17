import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from 'react-native';

export default class Example extends React.Component {

    state = {
        //count=0,
        ///title = 'No text',
    }
    
    render() {
      return (
        <View>
          <Text> Вы нажали на кнопку раз </Text>
          <Button title='Press me'/>
        </View>
      );
    }
  }