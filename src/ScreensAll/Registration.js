import React, { useState, useReducer } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native';

export default function Registration({ navigation, route }) {

const [regphone, onChangePhone] = useState ('');
const [regname, onChangeName] = useState ('');
const [regemail, onChangeEmail] = useState ('');

  
  return(
   <SafeAreaView style={styles.container}>
     
    <View style={styles.top}>
       <Text style={styles.texttop}> Регистрация: </Text> 
       <TouchableOpacity  onPress={() => {navigation.navigate('Main')}}>
          <Text style={styles.textX}> X </Text> 
       </TouchableOpacity>      
    </View>   
    
    <View style = {styles.grey}/>

    <View style={styles.container}>
     
       <View style={styles.inputareastyle}>

       <Text style={styles.textstyle}> Номер телефона* </Text> 
         <TextInput
          style={styles.input}
          onChangeText={onChangePhone}
          value={regphone}
         /> 
       
       <Text style={styles.textstyle}> Имя </Text> 
         <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={regname}
         /> 

       <Text style={styles.textstyle}> E-mail* </Text> 
         <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={regemail}
         />  
    
       </View> 

       <TouchableOpacity style={styles.button} onPress={() => {
            const auth = [regname, regphone];
            navigation.navigate('Main',{auth})
          }}>
          <Text style={styles.buttontext}> РЕГИСТРАЦИЯ </Text> 
       </TouchableOpacity>     

     </View>
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingLeft: 15,
    backgroundColor: 'white',
  },

top: {
  height: 60,
  paddingLeft: 15,
  paddingRight: 15,
  paddingTop: 20,
  paddingBottom:20,
  justifyContent: 'space-between',
  flexDirection: 'row',
},

texttop: {
  fontWeight: "400",
  fontSize: 18,
},
textX: {
  color: 'grey',
  fontWeight: "500",
  fontSize: 22,
},
grey: {
  backgroundColor: '#F4F4F4',
  height:15,
},

input: {
  height: 43,
  width: 330,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  fontWeight: "500",
  borderRadius: 5,
},

inputareastyle: {
  flexDirection: 'column',
  marginTop: 16,
},
buttontext: {
  color:'white',
  fontWeight: "700",
  fontSize: 16,
},
button: {
  justifyContent: 'space-around',
  backgroundColor:'#11D6D4',
  width: 330,
  height: 43,
  borderRadius: 5, 
  paddingLeft: 100,
  marginLeft: 15,
  marginTop: 15,
},
  

textstyle: {
    fontWeight: "400",
    fontSize: 14,
},
});
