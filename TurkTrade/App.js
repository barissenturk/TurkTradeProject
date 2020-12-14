import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LoginScreen from './screens/loginScreen';
import HomeScreen from './screens/HomeScreen';
import Register from './screens/RegisterScreen';
import BuySell from './screens/BuySellScreen';
import Overview from './screens/OverView';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginApp from './authentication/login';

// const LoginScreen = ({navigation}) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
//     />
//   );
// };
// const ProfileScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <LoginApp />
      <Stack.Navigator>
        <Stack.Screen
          name="Login Page"
          component={LoginScreen}
          options={{title: 'TurkTrade'}}
        />

        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BuySell" component={BuySell} />
        <Stack.Screen name="Graph" component={Overview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
