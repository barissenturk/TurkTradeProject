import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (res) {
        firebase.database().ref('users').push({
          firstName: firstName,
          userId: firebase.auth().currentUser.uid,
          email: firebase.auth().currentUser.email,
          password: firebase.auth().currentUser.password,
          lastName: lastName,
          dob: dob,
          address: address,
          city: city,
          state: state,
          country: country,
          postalCode: postalCode,
        });
        firebase.auth().signOut();
        navigation.navigate('Login Page');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.warn(error);
      });
  };

  return (
    <View>
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
      />

      <TextInput
        style={styles.TextInput}
        placeholderTextColor="#333"
        placeholder="First Name"
        onChangeText={(firstName) => setFirstName(firstName)}
      />
      <TextInput
        style={styles.TextInput}
        placeholderTextColor="#333"
        placeholder="Last Name"
        onChangeText={(lastName) => setLastName(lastName)}
      />

      <TextInput
        style={styles.TextInput}
        placeholderTextColor="#333"
        placeholder="Date of birth"
        onChangeText={(dob) => setDob(dob)}
      />

      <TextInput
        style={styles.TextInput}
        placeholderTextColor="#333"
        placeholder="Address"
        onChangeText={(address) => setAddress(address)}
      />

      <TextInput
        style={styles.TextInput}
        placeholderTextColor="#333"
        placeholder="City"
        onChangeText={(city) => setCity(city)}
      />
      <TextInput
        style={styles.TextInput}
        placeholderTextColor="#333"
        placeholder="State"
        onChangeText={(state) => setState(state)}
      />

      <TextInput
        style={styles.TextInput}
        placeholderTextColor="#333"
        placeholder="Country"
        onChangeText={(country) => setCountry(country)}
      />

      <TextInput
        style={styles.TextInput}
        placeholderTextColor="#333"
        placeholder="Postal Code"
        onChangeText={(postalCode) => setPostalCode(postalCode)}
      />

      <View>
        <TouchableOpacity onPress={createUser}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>

    // <View style={styles.container}>
    //   <View style={styles.formWrapper}>
    //     <Text style={styles.welcomeText}>Register Form</Text>
    //     <View style={styles.formRow}>
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholderTextColor="#333"
    //         placeholder="First Name"
    //       />
    //     </View>

    //     <View style={styles.formRow}>
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholderTextColor="#333"
    //         placeholder="Last Name"
    //       />
    //     </View>

    //     <View style={styles.formRow}>
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholderTextColor="#333"
    //         placeholder="E-mail"
    //       />
    //     </View>
    //     <View style={styles.formRow}>
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholderTextColor="#333"
    //         placeholder="Date of birth"
    //       />
    //     </View>
    //     <View style={styles.formRow}>
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholderTextColor="#333"
    //         placeholder="Address"
    //       />
    //     </View>
    //     <View style={styles.formRow}>
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholderTextColor="#333"
    //         placeholder="City"
    //       />
    //     </View>
    //     <View style={styles.formRow}>
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholderTextColor="#333"
    //         placeholder="State"
    //       />
    //     </View>
    //     <View style={styles.formRow}>
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholderTextColor="#333"
    //         placeholder="Country"
    //       />
    //     </View>
    //     <View style={styles.formRow}>
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholderTextColor="#333"
    //         placeholder="Postal Code"
    //       />
    //     </View>
    //     <View style={styles.formRow}>
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholderTextColor="#333"
    //         placeholder="Password"
    //       />
    //     </View>
    //     <TouchableOpacity style={styles.signinBtn} onPress={() =>
    //       navigation.navigate('Login Page')}>
    //       <Text style={styles.signinText}>Register</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
};

export default Register;

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
  },
  welcomeText: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  signinBtn: {
    backgroundColor: '#c0c0c0',
    paddingVertical: 10,
    marginTop: 5,
  },
  signinText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
