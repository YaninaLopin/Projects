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
import RedTop from '../Components/RedTop';
import Input1 from '../Components/Input1';
import GreenField from '../Components/GreenField';
import BlueField from '../Components/BlueField';

export default function ClientInfo({ navigation, route }) {
  const {client}= route.params;
  const {name, surname, patronymic, phone, cardnumber, blocked, coupons, issued} = client;
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <RedTop title = " <  О клиенте" />
        </TouchableOpacity>
      <View/>

        <View style={styles.container1}>
          <Input1 title1="Фамилия:" title2={surname} backgroundColor="green" />
          <Input1 title1="Имя:" title2={name} />
          <Input1 title1="Отчество:" title2={patronymic} />
          <Input1 title1="Телефон:" title2={phone} />
          <Input1 title1="Номер карты:" title2={cardnumber} />
          <GreenField title1="Клиент заблокирован?:" title2="Нет" />
          <BlueField title1="Количество купонов в БД:" title2={coupons} />
          <Input1 title1="Выдано на руки:" title2={issued} />
        </View>
       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    //justifyContent: 'center',
    marginTop: 4,
  },
});
