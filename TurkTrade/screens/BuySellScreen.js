import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.HomePage}>
      <View style={styles.container}>

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
          <Text style={styles.stockInfoInc}>Apple: $99.77</Text><TouchableOpacity style={styles.buySell}>
          <Text style={styles.buysellText}>Buy</Text>
        </TouchableOpacity><TouchableOpacity style={styles.Sell}>
          <Text style={styles.buysellText}>Sell</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.topScreen}>
          <Text style={styles.stockInfoDcs}>Tesla: $84.32</Text><TouchableOpacity style={styles.buySell}>
          <Text style={styles.buysellText}>Buy</Text>
        </TouchableOpacity><TouchableOpacity style={styles.Sell}>
          <Text style={styles.buysellText}>Sell</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.topScreen}>
          <Text style={styles.stockInfoInc}>Alphabet: $1736.38</Text><TouchableOpacity style={styles.buySell}>
          <Text style={styles.buysellText}>Buy</Text>
        </TouchableOpacity><TouchableOpacity style={styles.Sell}>
          <Text style={styles.buysellText}>Sell</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.topScreen}>
          <Text style={styles.stockInfoDcs}>Amazon: $3099.40</Text><TouchableOpacity style={styles.buySell}>
          <Text style={styles.buysellText}>Buy</Text>
        </TouchableOpacity><TouchableOpacity style={styles.Sell}>
          <Text style={styles.buysellText}>Sell</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.topScreen}>
          <Text style={styles.stockInfoInc}>AT{'&'}T: $28.32</Text><TouchableOpacity style={styles.buySell}>
          <Text style={styles.buysellText}>Buy</Text>
        </TouchableOpacity><TouchableOpacity style={styles.Sell}>
          <Text style={styles.buysellText}>Sell</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.topScreen}>
          <Text style={styles.stockInfoDcs}>BestBuy: $119.14</Text><TouchableOpacity style={styles.buySell}>
          <Text style={styles.buysellText}>Buy</Text>
        </TouchableOpacity><TouchableOpacity style={styles.Sell}>
          <Text style={styles.buysellText}>Sell</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.topScreen}>
          <Text style={styles.stockInfoDcs}>Ford: $8.74</Text><TouchableOpacity style={styles.buySell}>
          <Text style={styles.buysellText}>Buy</Text>
        </TouchableOpacity><TouchableOpacity style={styles.Sell}>
          <Text style={styles.buysellText}>Sell</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.topScreen}>
          <Text style={styles.stockInfoInc}>Twitter: $44.68</Text><TouchableOpacity style={styles.buySell}>
          <Text style={styles.buysellText}>Buy</Text>
        </TouchableOpacity><TouchableOpacity style={styles.Sell}>
          <Text style={styles.buysellText}>Sell</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomScreen}>
        
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
    backgroundColor: '#91C883',
    paddingVertical: 10,
    width: '25%',
    borderRadius: 10,
   
  },
  buysellText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Sell: {
    backgroundColor: '#D5362C',
    paddingVertical: 10,
    width: '25%',
    borderRadius: 10,
    marginLeft:3,
   
  },
});
