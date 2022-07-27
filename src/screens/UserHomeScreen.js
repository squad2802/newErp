// ======================================================== user Home screen =====================================================
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card style={[styles.leftContainer]}>
          <Image
            source={require('../assets/mainLogo.jpeg')}
            style={{width: '85%', marginLeft: 20}}
          />
        </Card>
        <Card style={[styles.rightContainer, styles.colorOrange]}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/white.png')}
              style={styles.idCardImage}
            />
            <View style={{marginTop: 25, marginLeft: 20}}>
              <Text
                style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 18}}>
                User Name
              </Text>
              <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
                Possition in company
              </Text>
              <Text style={{color: '#FFFFFF', fontWeight: '500'}}>
                Technology
              </Text>
              <Text style={{color: '#FFFFFF', fontWeight: '500'}}>
                contact no
              </Text>
            </View>
          </View>
          <View style={{marginTop: 25, marginLeft: 20}}>
            {/* <Image
              source={require('../assets/barcode.png')}
              style={{height: 40, width: 270}}
            /> */}
            <View
              style={{
                fontWeight: '900',
                fontSize: 22,
                backgroundColor: '#000000',
              }}
            />
            <Text>iiiiiiiiiiiiiiiiiiiiiiiiiiii</Text>
          </View>
        </Card>
        <Card style={[styles.leftContainer, styles.colorGreen]}>
          {/* <CalendarHome /> */}
        </Card>
        <Card style={[styles.rightContainer, styles.colorBlue]}>
          <Text> Right Card</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  leftContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderRadius: 15,
    height: 190,
    marginRight: '17%',
    marginLeft: '1%',
    borderWidth: 2,
    borderColor: '#A9A9A9',
  },
  rightContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderRadius: 15,
    height: 190,
    marginLeft: '17%',
    marginRight: '1%',
    borderWidth: 2,
    borderColor: '#A9A9A9',
  },
  idCardImage: {
    height: 80,
    width: 80,
    marginLeft: 15,
    marginTop: 25,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#A9A9A9',
  },
  colorOrange: {
    backgroundColor: '#FFA500',
  },
  colorGreen: {
    backgroundColor: 'green',
  },
  colorBlue: {
    backgroundColor: '#3498db',
    marginBottom: 10,
  },
});
