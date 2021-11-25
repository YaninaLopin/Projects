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
import RedTop from '../Components/RedTop';
import Example from '../Components/Example';

export default function InputScreen({ navigation, route }) {

const onAddClient = route.params.onAddClient;

  // const [positioninput, onChangePositionInput] = useState(' ');
  // const [nameinput, onChangeNameInput] = useState(' ');
  // const [surnameinput, onChangeSurnameInput] = useState(' ');
  // const [ageinput, onChangeAgeInput] = useState(' ');
  // const [patronymicinput, onChangePatronymicInput] = useState(' ');
  // const [phoneinput, onChangePhoneInput] = useState(' ');
  
  const initialValue = {
    position: 'Учитель',
    name: '',
    surname: '',
    age: '',
    patronymic: '',
    phone: '',
    //id: '',
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'position':
        return { ...state, position: action.payload };
      case 'name':
        return { ...state, name: action.payload };
      case 'surname':
        return { ...state, surname: action.payload }; 
      case 'age':
        return { ...state, age: action.payload }; 
      case 'patronymic':
        return { ...state, patronymic: action.payload };   
      case 'phone':
        return { ...state, phone: action.payload };       
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  };
  
  const [state, dispatch] = useReducer(reducer, initialValue);

  return(
   <SafeAreaView style={styles.container}>
    
    <View style={styles.container}>

     <RedTop title='< Введите данные клиента'/>

     {/* <Example/> */}
     
       <View style={styles.inputareastyle}>

       <Text style={styles.textstyle}> Введите должность: </Text> 
        <TextInput
          style={styles.input}
          onChangeText={(text) => dispatch({type: 'position', payload: text})}
          value={state.position}
        />

        <Text style={styles.textstyle}> Введите фамилию: </Text> 
        <TextInput
          style={styles.input}
          onChangeText={(text) => dispatch({type: 'surname', payload: text})}
          value={state.surname}
        />

        <Text style={styles.textstyle}> Введите имя: </Text>
         <TextInput
           style={styles.input}
           onChangeText={(text) => dispatch({type: 'name', payload: text})}
           value={state.name}
        />

        <Text style={styles.textstyle}> Введите отчество: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => dispatch({type: 'patronymic', payload: text})}
          value={state.patronymic}
        />
          
        <Text style={styles.textstyle}> Введите возраст: </Text>  
        <TextInput
          style={styles.input}
          onChangeText={(text) => dispatch({type: 'age', payload: text})}
          value={state.age}
        />
        
        <Text style={styles.textstyle}> Введите номер телефона: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => dispatch({type: 'phone', payload: text})}
          value={state.phone}
        />
      
       </View> 

       <View style={styles.buttonstyle}>
          <Button title='Добавить клиента в базу' onPress={() => {
          onAddClient (state); 
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
