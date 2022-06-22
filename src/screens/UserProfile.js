import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Avatar} from 'react-native-paper';

export default function UserProfile() {
  // edit user
  const editUser = () => {
    Alert.alert('edit User');
  };

  // user message
  const userMessage = () => {
    Alert.alert('edit User');
  };

  // user call
  const usercall = () => {
    Alert.alert('user Calling');
  };

  // user email
  const userEmail = () => {
    Alert.alert('user Mailing');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.imageView}>
          <Icon
            name="notifications"
            size={30}
            color="yellow"
            style={{marginLeft: '90%'}}
          />
          <Avatar.Image
            size={100}
            source={require('../assets/mainLogo.jpeg')}
          />

          <Text style={styles.userText}>name</Text>
          <Text style={styles.phoneText}>route.params.phone</Text>
          <Text style={styles.phoneEmail}>route.params.email</Text>

          <View style={styles.viewIcons}>
            <TouchableOpacity onPress={() => editUser()}>
              <Icon name="edit" size={30} color="white" />
              <Text style={{color: 'white'}}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchStyle}
              onPress={() => userMessage()}>
              <Icon name="message" size={30} color="white" />
              <Text style={{color: 'white'}}>message</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => usercall()}>
              <Icon name="phone" size={30} color="white" />
              <Text style={{color: 'white'}}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchStyle}
              onPress={() => userEmail()}>
              <Icon name="email" size={30} color="white" />
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
    // padding: 5,
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
