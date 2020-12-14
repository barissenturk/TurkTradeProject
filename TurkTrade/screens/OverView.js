import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Transformation
} from 'react-native';
import logo from "../graph/graph1.jpg"

const HomeScreen = ({navigation}) => {
  return (
    <View>
      
          <Image source={logo} /> 
        
        
      
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

  HomePage: {
    backgroundColor: '#eaece5',
    height: '100%',
  },



 

});
