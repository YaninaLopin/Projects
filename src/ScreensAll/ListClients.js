import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  TextInput,
  SafeAreaView,
} from 'react-native';
import RedTop from '../Components/RedTop';
import NameBlock from '../Components/NameBlock';

export default function ListClients({ navigation }) {
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

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ClientInfo', { client: item })}>
        <NameBlock title={item.name + '  ' + item.surname} />
      </TouchableOpacity>
    );
  };

  const [text, onChangeText] = useState('Введите имя');

  const addClient = () => {
    setClients([...clients, { ...baseClient, name: text }]);
    console.log(clients);
  };

  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.container}>

       <RedTop title='Клиенты'/>
       
        <View style={styles.inputareastyle}>
           <TextInput
             style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <View style={styles.buttonstyle}>
            <Button title='Добавить' onPress={() => addClient()} />
          </View>
        </View>

       
        <View style={styles.container1}>
           <FlatList data={clients} renderItem={renderItem} />
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
    //padding: 10,
    marginLeft: 20,
    marginRight: 20,

  },
  input: {
    height: 40,
    width: 180,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  inputareastyle: {
    flexDirection: 'row',
  },
  buttonstyle: {
    justifyContent: 'space-between',
    marginTop: 16,
  },
});
