import React from 'react';
import {
  createDrawerNavigator,
  // DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Alert, SafeAreaView, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';

import HomeScreen from '../screens/HomeScreen';
import UserProfile from '../screens/UserProfile';
import UserProject from '../screens/UserProject';
import AllUsers from '../screens/AllUsers';

// this component are used for drawer navigation (side menu)
const Drawer = createDrawerNavigator();
const handleSignOut = ({navigation}) => {
  navigation.navigate('Login');
};
const CustomDrawer = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={({color}) => (
          <View style={{flexDirection: 'row'}}>
            <MaterialIcons
              name="logout"
              size={30}
              color={color ? 'orange' : '#A9A9A9'}
            />
            <Text
              style={{
                // color: '#808080',
                color: 'orange',
                fontWeight: '500',
                paddingLeft: 30,
                paddingTop: 4,
              }}>
              Logout
            </Text>
          </View>
        )}
        onPress={({navigation}) => {
          props.navigation.toggleDrawer();
          Alert.alert(
            'Logout',
            'Are you sure? You want to logout?',
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
                    .then(() => navigation.replace('Login'))
                    .catch(error => {
                      console.log(error);
                      if (error.code === 'auth/no-current-user')
                        navigation.replace('Login');
                    });
                },
              },
            ],
            {cancelable: false},
          );
        }}
      />
    </SafeAreaView>
  );
};
export default function HomePage() {
  return (
    <Drawer.Navigator
      initialRouteName="UserHome"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="UserHome"
        component={HomeScreen}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <MaterialIcons
              name="home"
              size={30}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={UserProfile}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <MaterialIcons
              name="person"
              size={30}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Project"
        component={UserProject}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <MaterialIcons
              name="code"
              size={30}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="AllUser"
        component={AllUsers}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <MaterialIcons
              name="group"
              size={30}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
