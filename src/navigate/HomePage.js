import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {SafeAreaView, ImageBackground, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Title, Text} from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';
import UserProfile from '../screens/UserProfile';
import UserProject from '../screens/UserProject';
import AllUsers from '../screens/AllUsers';

// this component are used for drawer navigation (side menu)
const Drawer = createDrawerNavigator();
// const CustomDrawer = props => {
//   <DrawerContentScrollView>
//     <View>
//       <Title>User Name</Title>
//       <Text>Application Developer</Text>
//     </View>
//   </DrawerContentScrollView>;
// };
export default function HomePage() {
  return (
    <Drawer.Navigator
      initialRouteName="userHome"
      // drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="userHome"
        component={HomeScreen}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="home"
              size={20}
              color={focused ? 'orange' : '#A9A9A9'}
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
            <Ionicons
              name="podium"
              size={20}
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
            <Ionicons
              name="home"
              size={20}
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
            <Ionicons
              name="home"
              size={20}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
