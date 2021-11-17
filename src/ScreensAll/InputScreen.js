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

export default function InputScreen({ navigation }) {

  const [nameinput, onChangeNameInput] = useState(' ');
  const [surnameinput, onChangeSurnameInput] = useState(' ');
  const [ageinput, onChangeAgeInput] = useState(' ');
  const [patronymicinput, onChangePatronymicInput] = useState(' ');
  const [phoneinput, onChangePhoneInput] = useState(' ');

  const clientsmassiv = [
    {
      name: 'Иван',
      surname: 'Иванов',
      age: 25,
      patronymic: 'Иванович',
      phone: '+7-900-123-45-67',
      cardnumber: '100500',
      blocked: false,
      coupons: 4,
      issued: 1,
    },
    {
      name: 'Сергей',
      surname: 'Сидоров',
      age: 39,
      patronymic: 'Сергеевич',
      phone: '+7-911-123-12-13',
      cardnumber: '100100',
      blocked: true,
      coupons: 12,
      issued: 1,
    },
    {
      name: 'Измаил',
      surname: 'Игнатов',
      age: 15,
      patronymic: 'Алексеевич',
      phone: '+7-911-123-33-44',
      cardnumber: '100200',
      blocked: false,
      coupons: 7,
      issued: 3,
    },
  ];
  const [clients, setClients] = useState(clientsmassiv);

  const baseClient = {
    name: '',
    surname: '',
    age: 0,
    patronymic: '',
    phone: '',
    cardnumber: '',
    blocked: false,
    coupons: 0,
    issued: 0,
  };

  const addClient = () => {
     setClients([...clients, { ...baseClient, name: nameinput}]);
  console.log(clients);
 };

  return(
 <SafeAreaView style={styles.container}>
    
    <View style={styles.container}>

     <RedTop title='< Введите данные клиента'/>

     {/* <Example/> */}
     
       <View style={styles.inputareastyle}>

         <Text style={styles.textstyle}> Введите имя: </Text>
         <TextInput
           style={styles.input}
           onChangeText={onChangeNameInput}
           value={nameinput}
        />

        <Text style={styles.textstyle}> Введите фамилию: </Text> 
        <TextInput
          style={styles.input}
          onChangeText={onChangeSurnameInput}
          value={surnameinput}
        />
          
        <Text style={styles.textstyle}> Введите возраст: </Text>  
        <TextInput
          style={styles.input}
          onChangeText={onChangeAgeInput}
          value={ageinput}
        />

        <Text style={styles.textstyle}> Введите отчество: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePatronymicInput}
          value={patronymicinput}
        />
        
        <Text style={styles.textstyle}> Введите номер телефона: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePhoneInput}
          value={phoneinput}
        />
      
       </View> 

       <View style={styles.buttonstyle}>
          <Button title='Добавить' onPress={() => addClient()} />    
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
  height: 40,
  width: 300,
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
