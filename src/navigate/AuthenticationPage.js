// import {StyleSheet, SafeAreaView, View} from 'react-native';
// import React from 'react';
// import {Button, Title} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Entypo';

// export default function AuthenticationPage() {
//   // user login with email and password
//   const handleEmailLogin = () => {
//     alert('hello');
//   };

//   // user login with phone and otp
//   const handlePhoneLogin = () => {
//     alert('hello');
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.containerView}>
//         <Button
//           mode="contained"
//           icon="camera"
//           style={styles.containerButton}
//           onPress={handleEmailLogin}>
//           Email
//         </Button>
//         <Button
//           mode="outlined"
//           icon="email"
//           style={styles.containerButton}
//           onPress={handlePhoneLogin}>
//           Phone
//         </Button>
//       </View>
//       <Title style={styles.containerTitle}>admin@squadminds.com</Title>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   containerView: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   containerButton: {
//     flex: 1,
//   },
//   containerTitle: {
//     alignSelf: 'center',
//     marginTop: '160%',
//     color: 'blue',
//   },
// });
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EmailLogin from '../screens/EmailLogin';
import PhoneLogin from '../screens/PhoneLogin';

const Tab = createMaterialTopTabNavigator();

export default function AuthenticationPage() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Email" component={EmailLogin} />
      <Tab.Screen name="Phone" component={PhoneLogin} />
    </Tab.Navigator>
  );
}
