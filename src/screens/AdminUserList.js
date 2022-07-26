// ================================================= Admin user list ==========================================
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Avatar, FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Todolist({navigation}) {
  const [users, setUsers] = useState([]);

  const deleteUserById = async id => {
    Alert.alert(
      'Logout',
      'Are you sure? You want to logout',
      [
        {
          text: 'Cancel',
          onPress: () => {
            return null;
          },
        },
        {
          text: 'Confirm',
          onPress: () => {
            firestore()
              .collection('userList')
              .doc(id)
              .delete()
              .then(() => {
                console.log('user deleted');
              });
            const filterData = users.filter(item => item.id !== id);
            setUsers(filterData);
          },
        },
      ],
      {cancelable: false},
    );
  };

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
              onPress={() => navigation.navigate('TPass', item)}>
              <View style={styles.listTitle}>
                <Avatar.Image
                  size={50}
                  source={require('../assets/mainLogo.jpeg')}
                  // label={item.name.substring(0, 2).toUpperCase()}
                  backgroundColor="white"
                />
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>

                <View style={styles.containerIcons}>
                  <TouchableOpacity
                    style={styles.deleteIcon}
                    onPress={() => deleteUserById(item.id)}>
                    <Icon name="delete" size={40} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <FAB style={styles.addButton} />
      <Icon
        name="add"
        size={40}
        color="#FFFFFF"
        style={styles.fabButton}
        onPress={() => navigation.navigate('AddUser')}
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
    backgroundColor: '#A9A9A9',
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
  addButton: {
    position: 'absolute',
    marginTop: 695,
    marginLeft: 320,
  },
  fabButton: {
    position: 'absolute',
    marginTop: 703,
    marginLeft: 328,
  },
});
