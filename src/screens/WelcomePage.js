// ====================================================== Welcome screen ==============================================
import {StyleSheet, Image, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default function WelcomePage({navigation}) {
  const [, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace(auth().currentUser ? 'Home' : 'Login');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/mainLogo.jpeg')} />
      <ActivityIndicator
        animating={true}
        color={Colors.blue}
        size="20"
        style={{marginTop: 20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
