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
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Todolist({navigation}) {
  const [users, setUsers] = useState([]);

  // delete user
  const deleteUserById = async id => {
    await firestore()
      .collection('userList')
      .doc(id)
      .delete()
      .then(() => {
        console.log('user deleted');
      });
    const filterData = users.filter(item => item.id !== id);
    setUsers(filterData);
  };

  // open user
  const openUser = item => {
    users.filter(item => item.id !== item);
    console.log('test index====>' + item);
    navigation.navigate('TPass', item);
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('userList')
      .onSnapshot(querySnapshot => {
        const users = [];
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setUsers(users);
        console.log(users);
      });
    return () => subscriber();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={users}
        keyExtractor={index => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => openUser(item.id)}>
            <View style={styles.listTitle}>
              <Avatar.Image
                size={50}
                source={require('../assets/mainLogo.jpeg')}
                // label={item.name.substring(0, 2).toUpperCase()}
                backgroundColor="white"
              />
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.title}>{item.name.toUpperCase()}</Text>
              </View>

              <View style={styles.containerIcons}>
                <TouchableOpacity
                  style={styles.deleteIcon}
                  onPress={() => deleteUserById(item.id)}>
                  <Icon name="delete" size={25} />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
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
    backgroundColor: 'silver',
    borderRadius: 15,
    marginTop: 4,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 20,
    // fontSize: 20,
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
