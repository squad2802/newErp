// ====================================================== Admin User Profile Details ===================================================
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
  Linking,
} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';

export default function TimePass({route, navigation}) {
  // email Invitation
  // if (!route.params.email == 0) {
  //   var actionCodeSettings = {
  //     url: 'https://squadmindserplogins.page.link/Rdse',
  //     handleCodeInApp: true,
  //     android: {
  //       packageName: 'com.example.android',
  //       installApp: true,
  //     },
  //   };
  // }
  // return auth()
  //   .sendSignInLinkToEmail(route.params.email, actionCodeSettings)
  //   .then(Alert.alert('email sent', 'inform the user'));
  // Alert.alert('send invitation');

  // edit user
  const editUser = () => {
    if (!route.params.name || route.params.email || route.params.phone) {
      // alert(route.params.name);
      navigation.navigate('AHome', {
        itemId: route.params.id,
        itemName: route.params.name,
        itemEmail: route.params.email,
        itemPhone: route.params.phone,
      });
    } else {
      Alert.alert('does not exist');
    }
  };

  // openDialScreen
  const openDialScreen = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${route.params.phone}`;
    } else {
      phoneNumber = `telprompt:${route.params.phone}`;
    }
    Linking.openURL(phoneNumber);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.imageView}>
          <Avatar.Image
            size={100}
            source={require('../assets/mainLogo.jpeg')}
          />
          {/* <Text style={{color: '#FFFFFF'}}>{route.params.id}</Text> */}
          <Text style={styles.userText}>{route.params.name}</Text>
          <Text style={styles.phoneText}>{route.params.phone}</Text>
          <Text style={styles.phoneEmail}>{route.params.email}</Text>

          <View style={styles.viewIcons}>
            <TouchableOpacity onPress={() => editUser()}>
              <Icon name="edit" size={30} color="#FFFFFF" />
              <Text style={{color: '#FFFFFF'}}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchStyle}>
              <Icon
                name="camera"
                size={30}
                color="#FFFFFF"
                style={{marginLeft: 12}}
              />
              <Text style={{color: '#FFFFFF'}}>Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openDialScreen()}>
              {/* alert(route.params.phone) */}
              <Icon name="phone" size={30} color="#FFFFFF" />
              <Text style={{color: '#FFFFFF'}}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchStyle}
              onPress={() => navigation.navigate('emailInvitations', route)}>
              <Icon
                name="send"
                size={30}
                color="#FFFFFF"
                style={{marginLeft: 2}}
              />
              <Text style={{color: '#FFFFFF'}}>Send</Text>
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
    backgroundColor: '#FFA500',
    alignItems: 'center',
    padding: 15,
  },
  userText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    color: '#FFFFFF',
  },
  phoneText: {
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    color: '#FFFFFF',
  },
  phoneEmail: {
    fontWeight: '600',
    fontSize: 15,
    color: '#FFFFFF',
  },
  viewIcons: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
    marginLeft: 40,
  },
  touchStyle: {
    paddingHorizontal: 50,
  },
});
