import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {firebase} from '@react-native-firebase/firestore';
import {auth} from '@react-native-firebase/auth';

export default function TimePass({route, navigation}) {
  // email Invitation
  const emailInvite = async () => {
    if (!route.params.email == 0) {
      var actionCodeSettings = {
        url: 'https://squadmindserplogins.page.link/Rdse',
        handleCodeInApp: true,
        android: {
          packageName: 'com.example.android',
          installApp: true,
        },
      };
    }
    return auth().sendSignInLinkToEmail(route.params.email, actionCodeSettings)
    .then(Alert.alert('email sent', 'inform the user'))
  };

  // edit user
  const editUser = () => {
    if (!route.params.name || route.params.email || route.params.phone) {
      // alert(route.params.name);
      navigation.navigate('AHome');
    } else {
      Alert.alert('doesnot exist');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.imageView}>
          <Avatar.Image
            size={100}
            source={require('../assets/mainLogo.jpeg')}
          />
          <Text style={styles.userText}>{route.params.name}</Text>
          <Text style={styles.phoneText}>{route.params.phone}</Text>
          <Text style={styles.phoneEmail}>{route.params.email}</Text>

          <View style={styles.viewIcons}>
            <TouchableOpacity onPress={() => editUser()}>
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
            <TouchableOpacity
              style={styles.touchStyle}
              onPress={() => emailInvite()}>
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
  phoneEmail: {
    fontWeight: '600',
    fontSize: 15,
    // marginTop: 10,
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
