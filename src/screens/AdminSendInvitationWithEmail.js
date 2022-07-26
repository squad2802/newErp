/* eslint-disable prettier/prettier */
import {StyleSheet, SafeAreaView, Text, View, Alert} from 'react-native';
import {Button, Title} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

export default function AdminSendInvitationWithEmail() {
  const sendInvitation = () => {
      Alert.alert('user Id======>',);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <View style={styles.iconBackground}>
          <MaterialIcons name="mail" size={150} color="#FFFFFF" style={styles.icanStyle}/>
          </View>
          <Title style={styles.titleStyle}>Send Email Invitation</Title>
        </View>
        <Text style={styles.textContent}>
          First set your login password click on email link sent to
        </Text>
        <Text style={styles.textEmail}>admin@squadmindsinc.com</Text>
      </View>
      <Button
        mode="contained"
        style={styles.containerButton}
        onPress={() => sendInvitation()}>
        Proceed
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  iconBackground: {
    backgroundColor: 'orange',
    width: 200,
    height: 200,
    borderRadius: 200,
    alignSelf: 'center',
    marginTop: 80,
  },
  icanStyle: {
    alignSelf: 'center',
    marginTop: 25,
  },
  titleStyle: {
    alignSelf: 'center',
    marginTop: 120,
    fontSize: 25,
    color: 'orange',
    fontWeight: '900',
  },
  textContent: {
    alignSelf: 'center',
    marginTop: 100,
  },
  textEmail: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  containerButton: {
    height: 50,
    paddingTop: 7,
    marginTop: 80,
    borderRadius: 15,
    backgroundColor: '#FFA500',
    width: '80%',
    alignSelf: 'center',
  },
});
