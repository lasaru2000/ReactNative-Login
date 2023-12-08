import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Login,signup,welcome } from './screens';



const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName='welcome'>
        <Stack.Screen 
        name='welcome'
        component ={welcome}
        options={{
          headerShown:false
        }}
         />
         <Stack.Screen
         name = 'login'
         component={Login}
         options={{
          headerShown:false
         }}
         />
         <Stack.Screen
         name='signup'
         component={signup}
         options={{
          headerShown:false
         }}
         />
         
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

