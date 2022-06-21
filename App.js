import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomePage from './src/screens/WelcomePage';
import AuthenticationPage from './src/navigate/AuthenticationPage';
import HomePage from './src/navigate/HomePage';
import AdminLogin from './src/screens/AdminLogin';
import AdminHome from './src/screens/AdminHome';
import HomeScreen from './src/screens/HomeScreen';
import Todolist from './src/screens/Todolist';
import TimePass from './src/screens/timepass';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={AuthenticationPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={AdminLogin}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="AHome"
          component={AdminHome}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="UHome"
          component={HomeScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="UserList"
          component={Todolist}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="TPass"
          component={TimePass}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
