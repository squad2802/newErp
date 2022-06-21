// import {
//         SafeAreaView,
//         View,
//         StyleSheet,
//         Image,
//         Text,
//         TouchableOpacity,
//       } from 'react-native';
//       import React, {useState, createRef, useEffect} from 'react';
//       import {Button, TextInput} from 'react-native-paper';
//       import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
//       import auth from '@react-native-firebase/auth';
//       import Icon1 from 'react-native-vector-icons/dist/MaterialIcons';
//       import {Formik, Form, Field} from 'formik';

//       export default function AdminLogin({navigation}) {
//         const [adminEmail, setAdminEmail] = useState('');
//         const [adminPassword, setAdminPassword] = useState('');
//         const [emailError, setEmailError] = useState("");
//         const [passwordError, setPasswordError] = useState("");
//         const [isSecure, setSecure] = useState(true); // for eye
//         // email validations
//         useEffect(() => {
//           console.log('----->', adminEmail);
//           if (adminEmail !== '') {
//             const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
//             if (!(regEx.test(adminEmail))) {
//               setEmailError("provide a valid eamil");
//             } else {
//               setEmailError("");
//             }
//           }
//         }, [adminEmail]);
//         // password validations
//         // login with admin
//         const handleAdminLoginButton = async () => {
//           // console.log(data);
//           try {
//             await auth()
//               .signInWithEmailAndPassword(adminEmail, adminPassword)
//               .then(userList => {
//                 console.log(userList);
//                 if (userList) {
//                   console.log('successfully login ');
//                   navigation.navigate('AHome');
//                 }
//               });
//           } catch (e) {
//             // console.log(e);
//             // if (e.code === 'auth/invalid-email') {
//             //   console.log('email is not valid');
//             // } else if (e.code === 'auth/user not found') {
//             //   console.log('user not find');
//             // } else {
//             //   console.log('wrong password');
//             // }
//           }
//         };

//         return (
//           <SafeAreaView style={styles.container}>
//             <View style={styles.containerView}>
//               <Image
//                 source={require('../assets/mainLogo.jpeg')}
//                 style={styles.containerImage}
//               />
//             </View>
//             <Form>
//                 <View style={styles.inputView}>
//                   <TextInput
//                     mode="outlined"
//                     placeholder="Admin Email"
//                     blurOnSubmit={false}
//                     returnKeyType="next"
//                     value={adminEmail}
//                     onChangeText={text => setAdminEmail(text)}
//                   />

//                   <TextInput
//                     mode="outlined"
//                     placeholder="Admin Password"
//                     onSubmitEditing={dismissKeyboard}
//                     blurOnSubmit={false}
//                     secureTextEntry={true}
//                     returnKeyType="done"
//                     value={adminPassword}
//                     onChangeText={text => setAdminPassword(text)}
//                     // onEndEditing={validatePassword}
//                   />
//                   <Button
//                     mode="contained"
//                     style={styles.containerButton}
//                     // onPress={handleAdminLoginButton}
//                     >
//                     Login With Admin
//                   </Button>
//                   <Text style={{color: 'black', marginTop: 5}}>
//                     Please login here with Admin Add Delete and Update User
//                   </Text>
//                 </View>
//             </Form>
//           </SafeAreaView>
//         );
//       }

//       const styles = StyleSheet.create({
//         container: {
//           flex: 1,
//           backgroundColor: 'white',
//         },
//         containerView: {
//           alignItems: 'center',
//           marginTop: 130,
//         },
//         containerImage: {
//           height: 150,
//           width: 230,
//         },
//         inputView: {
//           marginRight: '10%',
//           marginLeft: '10%',
//         },
//         containerButton: {
//           height: 50,
//           paddingTop: 7,
//           marginTop: 15,
//           borderRadius: 15,
//         },
//       });
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TimePass() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.imageView}>
          <Avatar.Image
            size={100}
            source={require('../assets/mainLogo.jpeg')}
          />
          <Text style={styles.userText}>item.name</Text>
          <Text style={styles.phoneText}>+91 item.phone</Text>
          <Text style={styles.phoneText}>item.email</Text>

          <View style={styles.viewIcons}>
            <TouchableOpacity>
              <Icon name="edit" size={30} color="white" />
              <Text style={{color: 'white'}}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchStyle}>
              <Icon name="camera" size={30} color="white" />
              <Text style={{color: 'white'}}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="phone" size={30} color="white" />
              <Text style={{color: 'white'}}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchStyle}>
              <Icon name="send" size={30} color="white" />
              <Text style={{color: 'white'}}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageView: {
    height: 300,
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 15,
  },
  userText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    color: 'white',
  },
  phoneText: {
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    color: 'silver',
  },
  viewIcons: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
    // backgroundColor: 'red',
    marginLeft: 40,
  },
  touchStyle: {
    paddingHorizontal: 50,
  },
});
