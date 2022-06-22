import {StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/mainLogo.jpeg')}
        style={{width: '100%', height: '100%'}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
