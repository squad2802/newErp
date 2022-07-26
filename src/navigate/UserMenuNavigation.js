// ======================================================== user navigation and logout =====================================================
import React, {useState, useEffect} from 'react';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Alert, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {firebase} from '@react-native-firebase/app';
import {Avatar, Title} from 'react-native-paper';

import UserHomeScreen from '../screens/UserHomeScreen';
import UserProfile from '../screens/UserProfile';
import UserProjectList from '../screens/UserProjectList';
import UserList from '../screens/UserList';
import UserLeaveTable from '../screens/UserLeaveTable';
import CalendarPage from '../screens/Calendar';

// this component are used for drawer navigation (side menu)
const Drawer = createDrawerNavigator();
const CustomDrawer = props => {
  const [user, setUser] = useState([]);

  // getData from firebase
  const getProfileData = async () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const user1 = [];
        user1.push(user);
        user1.map(item => {
          setUser(item);
        });
      }
    });
  };
  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.profileContainer}>
        <View style={styles.profileBack}>
          <Avatar.Image
            size={80}
            source={require('../assets/white.png')}
            style={styles.profileImage}
          />
          <View style={{marginTop: 140}}>
            <Title style={{color: '#FFFFFF', fontSize: 16, marginLeft: 10}}>
              Pradeep Yaduvanshi
            </Title>
            <Text style={styles.profileTitle}>{user.email}</Text>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label={({color}) => (
          <View style={{flexDirection: 'row'}}>
            <MaterialIcons
              name="logout"
              size={30}
              color={color ? '#FFA500' : '#A9A9A9'}
            />
            <Text style={styles.logoutContainer}>Logout</Text>
          </View>
        )}
        onPress={() => {
          props.navigation.toggleDrawer();
          Alert.alert(
            'Logout',
            'Are you sure? You want to logout',
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
                  firebase
                    .auth()
                    .signOut()
                    .then(() => {
                      // AsyncStorage.clear();
                      props.navigation.replace('Login');
                    })
                    .catch(error => {
                      console.log(error);
                      if (error.code === 'auth/no-current-user') {
                        props.navigation.replace('Login');
                      } else {
                        Alert.alert(error);
                      }
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

// main component
export default function HomePage() {
  return (
    <Drawer.Navigator
      initialRouteName="UserHome"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="UserHome"
        component={UserHomeScreen}
        options={{
          title: 'Home',
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
          title: 'Profile',
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
        component={UserProjectList}
        options={{
          title: 'Projects',
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
        component={UserList}
        options={{
          title: 'Users',
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
      <Drawer.Screen
        name="LeaveTable"
        component={UserLeaveTable}
        options={{
          title: 'Leaves',
          headerShown: true,
          drawerIcon: ({focused}) => (
            <MaterialIcons
              name="celebration"
              size={30}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Calendar"
        component={CalendarPage}
        options={{
          title: 'Calendar',
          headerShown: true,
          drawerIcon: ({focused}) => (
            <MaterialIcons
              name="event"
              size={30}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  logoutContainer: {
    color: '#FFA500',
    fontWeight: '500',
    paddingLeft: 30,
    paddingTop: 4,
  },
  profileContainer: {
    backgroundColor: '#FFFFFF',
    height: 240,
  },
  profileBack: {
    backgroundColor: '#FFA500',
    height: 200,
    flexDirection: 'row',
  },
  profileImage: {
    marginTop: 140,
    marginLeft: 5,
  },
  profileTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    marginLeft: 12,
  },
});
