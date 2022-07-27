// ======================================================== User list =====================================================
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Avatar} from 'react-native-paper';

export default function AllUsers({navigation}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('userList')
      .onSnapshot(querySnapshot => {
        const users1 = [];
        querySnapshot.forEach(doc => {
          users1.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setUsers(users1);
      });
    return () => subscriber();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={users}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('PView', item)}>
              <View style={styles.listTitle}>
                <Avatar.Image
                  size={50}
                  source={require('../assets/mainLogo.jpeg')}
                  // label={item.name.substring(0, 2).toUpperCase()}
                  backgroundColor="#FFFFFF"
                />
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listTitle: {
    width: '98%',
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingLeft: 15,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginTop: 4,
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: 20,
  },
  containerIcons: {
    flexDirection: 'row',
    position: 'absolute',
    right: '5%',
  },
  deleteIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
});
