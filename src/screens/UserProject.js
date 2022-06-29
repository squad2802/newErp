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

export default function UserProject({navigation}) {
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
        // console.log('userProject ====>', users1);
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
            <TouchableOpacity onPress={() => navigation.navigate('Desc', item)}>
              <View style={styles.listTitle} key={item.id}>
                <Avatar.Text
                  size={40}
                  label={item.id.substring(0, 2).toUpperCase()}
                  backgroundColor="black"
                  fontWeight="bold"
                />
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.title}>{item.id}</Text>
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
    backgroundColor: 'orange',
    borderRadius: 15,
    marginTop: 4,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 5,
    fontSize: 12,
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
