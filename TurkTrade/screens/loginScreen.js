import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signInUser = () => {
    if (email == null || (email == '' && password == '') || password == null) {
      Alert.alert('Please Enter valid Username or Password');
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate('Home');
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }
          if (error.code === 'auth/wrong-password') {
            Alert.alert('That password is wrong!');
          }
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={styles.welcomeText}>Welcome to TurkTrade</Text>
        <View style={styles.formRow}>
          <TextInput
            style={styles.TextInput}
            placeholderTextColor="#333"
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            style={styles.TextInput}
            placeholderTextColor="#333"
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.signinBtn} onPress={signInUser}>
          <Text style={styles.signinText}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signinBtn}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={styles.signinText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eaece5',
  },

  formWrapper: {
    width: '90%',
  },
  formRow: {
    marginBottom: 10,
  },
  TextInput: {
    backgroundColor: '#ddd',
    height: 40,
    paddingHorizontal: 10,
    color: '#333',
    marginTop:10,
  },
  welcomeText: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  signinBtn: {
    backgroundColor: '#24a0ed',
    paddingVertical: 10,
    marginTop: 10,
  },
  signinText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
