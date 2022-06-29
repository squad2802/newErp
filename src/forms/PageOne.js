import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {Title} from 'react-native-paper';

export default function PageOne() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <Title style={styles.titleHeading}>personal information</Title> */}
        <View style={{flexDirection: 'row', borderColor: 'black'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Pradeep</Text>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Yaduvanshi</Text>
        </View>
        <View style={{flexDirection: 'row', borderColor: 'black'}}>
          <Text>React-Native Mobile Developer</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  titleHeading: {
    color: 'black',
  },
});
