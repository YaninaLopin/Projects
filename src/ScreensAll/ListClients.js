import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
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
import { useSelector, useDispatch } from 'react-redux';
import {addClient} from '../Reducers/clientReducer';

export default function ListClients({ navigation, route }) {
  const dispatch = useDispatch();

  const clientsmassiv = [
    {
      name: 'Иван',
      surname: 'Иванов',
      age: 25,
      patronymic: 'Иванович',
      position: 'Бухгалтер',
      phone: '+7-900-123-45-67',
      cardnumber: '100500',
      blocked: false,
      coupons: 4,
      issued: 1,
      //id: "Ivan",
    },
    {
      name: 'Сергей',
      surname: 'Сидоров',
      age: 39,
      patronymic: 'Сергеевич',
      position: 'Учитель',
      phone: '+7-911-123-12-13',
      cardnumber: '100100',
      blocked: true,
      coupons: 12,
      issued: 1,
      //id: "Sergei",
    },
    {
      name: 'Измаил',
      surname: 'Игнатов',
      age: 15,
      patronymic: 'Алексеевич',
      position: 'Бухгалтер',
      phone: '+7-911-123-33-44',
      cardnumber: '100200',
      blocked: false,
      coupons: 7,
      issued: 3,
      //id: "Ismail",
    },
  ];

  // hoocks to add new client
  const [clients, setClients] = useState(clientsmassiv);
  const [filteredClients, setfilteredClients] = useState(clientsmassiv);

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

  const onAddClient = (client) => {
    setClients([...clients, client]);
    dispatch(addClient(client));
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ClientInfo', { client: item })}>
        <NameBlock title={item.name + '  ' + item.surname} />
      </TouchableOpacity>
    );
  };

  // используем useSelector
  const clientsRed = useSelector(state => state.clients);
  const profile = useSelector(state => state.profile);

 // console.log('clientsRed', clientsRed);

 //const auth=route.params.auth;

  const [text, onChangeText] = useState('Введите имя');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Бухгалтер', value: 'Бухгалтер'},
    {label: 'Учитель', value: 'Учитель'}
  ]);

  useEffect( () => {
   // console.log('new selected value',value);
    const newFilteredCliens = clientsRed.filter(client => client.position === value);
   // console.log('filtered clients', newFilteredCliens);
    setfilteredClients(value === undefined || value === null ? clientsRed : newFilteredCliens)
    //запись в скобках позволяет отображать всех клиентов при пустом фильтре
  },
  [value, clientsRed]);


  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.container}>
       <RedTop title='Клиенты'/>
       
        <View style={styles.container1}>

         <Text style={styles.textstyle}> Вы авторизовались как {profile.name} </Text> 

          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          /> 

           <FlatList 
              data={filteredClients} 
              renderItem={renderItem} 
              //keyExtractor={(myKey) => myKey.id}
            />
          
           <View style={styles.buttonstyle}>
              <Button 
                 style={styles.buttonstyle} 
                 title='Добавить клиента' 
                 onPress={() => navigation.navigate('InputScreen',{onAddClient})} />
           </View>
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
    marginTop:10,
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

  textstyle: {
    fontWeight: "400",
    fontSize: 18,
    color: 'blue',
    marginBottom: 10,
  },

  buttonstyle: {
    flex: 1,
    // height: 40,
    // width: 180,
   // backgroundColor: 'green',
   //fontWeight: 'bold',

  },
});
