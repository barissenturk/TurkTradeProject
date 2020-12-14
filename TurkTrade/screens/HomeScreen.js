import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {ceil} from 'react-native-reanimated';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({navigation}) => {
  const logOff = () => {
    auth()
      .signOut()
      .then(() => {console.log('User signed out!');
      navigation.navigate("Login Page")
    });
  };

  return (
    <View style={styles.HomePage}>
      <View style={styles.container}>
        <Button
          title="Logoff"
          onPress={
            logOff
          }></Button>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: 'black',
            paddingVertical: 10,
            margin: 5,
            marginTop: 10,
            height: 60,
            fontStyle: 'italic',
            fontWeight: 'bold',
          }}>
          S{'&'}P 500
        </Text>
        <View style={styles.topScreen}>
          <Text style={styles.stockInfoInc}>Apple: $99.77</Text>
          <Text style={styles.stockInfoDcs}>Tesla: $84.32</Text>
        </View>
        <View style={styles.topScreen}>
          <Text style={styles.stockInfoDcs}>Amazon: $3099.40</Text>
          <Text style={styles.stockInfoInc}>Alphabet: $1736.38</Text>
        </View>
        <View style={styles.topScreen}>
          <Text style={styles.stockInfoInc}>AT{'&'}T: $28.32</Text>
          <Text style={styles.stockInfoDcs}>BestBuy: $119.14</Text>
        </View>
        <View style={styles.topScreen}>
          <Text style={styles.stockInfoDcs}>Ford: $8.74</Text>
          <Text style={styles.stockInfoInc}>Twitter: $44.68</Text>
        </View>
      </View>
      <View style={styles.bottomScreen}>
        <TouchableOpacity
          style={styles.buySell}
          onPress={() => navigation.navigate('BuySell')}>
          <Text style={styles.buysellText}>Buy/Sell</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buySell}
          style={styles.buySell}
          onPress={() => navigation.navigate('Graph')}>
          <Text style={styles.buysellText}>Overview</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: '#eaece5',
    borderRadius: 5,
  },
  topScreen: {
    flexDirection: 'row',
    marginTop: 5,
  },
  bottomScreen: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HomePage: {
    backgroundColor: '#eaece5',
    height: '100%',
  },

  stockInfoInc: {
    fontSize: 20,
    margin: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    color: 'green',
    width: '45%',
    textAlign: 'center',
    borderRadius: 5,
  },

  stockInfoDcs: {
    fontSize: 20,
    margin: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    color: 'red',
    width: '45%',
    textAlign: 'center',
    borderRadius: 5,
  },
  buySell: {
    backgroundColor: '#c0c0c0',
    paddingVertical: 10,
    width: '75%',
    margin: 10,
    borderRadius: 10,
  },
  buysellText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
