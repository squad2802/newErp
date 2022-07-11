import React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';

import WelcomePage from './src/screens/WelcomePage';
import AuthenticationRoute from './src/navigate/AuthenticationRoute';
import UserHomeNavigation from './src/navigate/UserHomeNavigation';
import AdminLogin from './src/screens/AdminLogin';
import AdminUpdateUser from './src/screens/AdminUpdateUser';
import UserHomeScreen from './src/screens/UserHomeScreen';
import Todolist from './src/screens/Todolist';
import AdminUserDetails from './src/screens/AdminUserDetails';
import UserProjectDetails from './src/screens/UserProjectDetails';
import UserDetails from './src/screens/UserDetails';
import AdminAddUser from './src/screens/AdminAddUser';
import UserInformationNav from './src/navigate/UserInformationNav';
import ConnectForm from './src/navigate/ConnectForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Login"
          component={AuthenticationRoute}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Home"
          component={UserHomeNavigation}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Dashboard"
          component={AdminLogin}
          options={{headerShown: true, title: 'Admin login'}}
        />
        <Stack.Screen
          name="AHome"
          component={AdminUpdateUser}
          options={{headerShown: true, title: 'Update user'}}
        />
        <Stack.Screen
          name="UHome"
          component={UserHomeScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="UserList"
          component={Todolist}
          options={({navigation}) => ({
            title: 'User list',
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    'Logout',
                    'Are you sure?   You want to logout',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => {
                          return null;
                        },
                      },
                      {
                        text: 'Confirm',
                        onPress: () => {
                          auth()
                            .signOut()
                            .then(() => {
                              // AsyncStorage.clear();
                              navigation.navigate('Login');
                            })
                            .catch(error => {
                              console.log(error);
                              if (error.code === 'auth/no-current-user') {
                                navigation.navigate('Login');
                              } else {
                                Alert.alert(error);
                              }
                            });
                        },
                      },
                    ],
                    {cancelable: false},
                  );
                }}>
                <Icon name="logout" size={40} color="orange" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="TPass"
          component={AdminUserDetails}
          options={{headerShown: true, title: 'User Details'}}
        />
        <Stack.Screen
          name="Desc"
          component={UserProjectDetails}
          options={{headerShown: true, title: 'Project Details'}}
        />
        <Stack.Screen
          name="PView"
          component={UserDetails}
          options={{headerShown: true, title: 'User Details'}}
        />
        <Stack.Screen
          name="AddUser"
          component={AdminAddUser}
          options={{headerShown: true, title: 'Add user'}}
        />
        <Stack.Screen
          name="Information"
          component={UserInformationNav}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Info"
          component={ConnectForm}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
