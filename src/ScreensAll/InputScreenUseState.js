import React, { useState } from 'react';
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
import RedTop from '../Components/RedTop';
import Example from '../Components/Example';

export default function InputScreen({ navigation, route }) {

  const onAddClient = route.params.onAddClient;

  const [positioninput, onChangePositionInput] = useState(' ');
  const [nameinput, onChangeNameInput] = useState(' ');
  const [surnameinput, onChangeSurnameInput] = useState(' ');
  const [ageinput, onChangeAgeInput] = useState(' ');
  const [patronymicinput, onChangePatronymicInput] = useState(' ');
  const [phoneinput, onChangePhoneInput] = useState(' ');

  return(
   <SafeAreaView style={styles.container}>
    
    <View style={styles.container}>

     <RedTop title='< Введите данные клиента'/>

     {/* <Example/> */}
     
       <View style={styles.inputareastyle}>

       <Text style={styles.textstyle}> Введите должность: </Text> 
        <TextInput
          style={styles.input}
          onChangeText={onChangePositionInput}
          value={positioninput}
        />

        <Text style={styles.textstyle}> Введите фамилию: </Text> 
        <TextInput
          style={styles.input}
          onChangeText={onChangeSurnameInput}
          value={surnameinput}
        />

        <Text style={styles.textstyle}> Введите имя: </Text>
         <TextInput
           style={styles.input}
           onChangeText={onChangeNameInput}
           value={nameinput}
        />

        <Text style={styles.textstyle}> Введите отчество: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePatronymicInput}
          value={patronymicinput}
        />
          
        <Text style={styles.textstyle}> Введите возраст: </Text>  
        <TextInput
          style={styles.input}
          onChangeText={onChangeAgeInput}
          value={ageinput}
        />
        
        <Text style={styles.textstyle}> Введите номер телефона: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePhoneInput}
          value={phoneinput}
        />
      
       </View> 

       <View style={styles.buttonstyle}>
          <Button title='Добавить клиента в базу' onPress={() => {
           
           const client =  {
            position: "Учитель", 
            name: nameinput,
            surname: surnameinput,
            age: ageinput,
            patronymic: patronymicinput,
            phone:phoneinput
          };
           
          onAddClient (client); 
          console.log(client);
          navigation.goBack();
          }} />    

       </View>

     </View>
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'white',
},

container1: {
  flex: 1,
  marginLeft: 20,
  marginRight: 20,

},
input: {
  height: 50,
  width: 330,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  backgroundColor: '#F4F0ED',
  fontWeight: '500'
},

inputareastyle: {
  flexDirection: 'column',
  marginTop: 16,
},
buttonstyle: {
  width: 300,
  //justifyContent: 'space-between',
  //marginTop: 16,
  marginLeft: 12,
},
buttonstyle1: {
  width: 300,
  backgroundColor: 'black',
  borderWidth: 1,
  
},
textstyle: {
    paddingLeft: 16,
    fontWeight: 'bold'
}
});
