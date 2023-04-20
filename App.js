import {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// importing of screens
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import RegisterScreen from './screen/Register';

const Stack = createNativeStackNavigator();

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName="Login">
        <Stack.Screen name= "Login" component={LoginScreen}/>
        <Stack.Screen name= "Register" component={RegisterScreen} />
        <Stack.Screen name= "Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}