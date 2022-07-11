// ======================================================== user Home screen =====================================================
import {SafeAreaView, ImageBackground, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Title} from 'react-native-paper';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.title}>HOME SCREEN</Title>
      <ImageBackground
        source={require('../assets/mainLogo.jpeg')}
        style={styles.image}
      />
      <Text style={styles.title}>This the Home Screen of squadMinds</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: 200,
    width: 300,
  },
  title: {
    color: 'orange',
    fontWeight: 'bold',
  },
});
