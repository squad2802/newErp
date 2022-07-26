// ======================================================== User Project details =====================================================
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProjectDesc({route}) {
  // Project Details
  const ProjectDetails = () => {
    Alert.alert('Project Details');
  };

  // Project Status
  const ProjectStatus = () => {
    Alert.alert('Project Status');
  };

  // Project Client
  const ProjectClient = () => {
    Alert.alert('Project Client');
  };

  // Project Url
  const ProjectUrl = () => {
    Alert.alert('Project Url');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.imageView}>
          <Avatar.Text
            label={route.params.id.substring(0, 2).toUpperCase()}
            size={100}
            backgroundColor="#C36900"
          />
          <Text style={styles.userText}>{route.params.id}</Text>
          {/* <Text style={styles.phoneText}>{route.params.phone}</Text> */}
          <Text style={styles.userText}>{route.params.name}</Text>

          <View style={styles.viewIcons}>
            <TouchableOpacity onPress={() => ProjectDetails()}>
              {/* <Icon name="edit" size={30} color="#FFFFFF" /> */}
              <Text style={{color: 'green', fontWeight: 'bold', fontSize: 18}}>
                Details
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchStyle}
              onPress={() => ProjectStatus()}>
              {/* <Icon name="camera" size={30} color="#FFFFFF" /> */}
              <Text style={{color: 'green', fontWeight: 'bold', fontSize: 18}}>
                Status
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => ProjectClient()}>
              {/* <Icon name="phone" size={30} color="#FFFFFF" /> */}
              <Text style={{color: 'green', fontWeight: 'bold', fontSize: 18}}>
                Client
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchStyle}
              onPress={() => ProjectUrl()}>
              {/* <Icon name="send" size={30} color="#FFFFFF" /> */}
              <Text style={{color: 'green', fontWeight: 'bold', fontSize: 18}}>
                URL
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageView: {
    height: 250,
    width: '100%',
    backgroundColor: '#FFA500',
    alignItems: 'center',
    padding: 15,
  },
  userText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    color: '#FFFFFF',
  },
  phoneText: {
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    color: '#A9A9A9',
  },
  phoneEmail: {
    fontWeight: '600',
    fontSize: 15,
    color: '#A9A9A9',
  },
  viewIcons: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
    marginLeft: 40,
  },
  touchStyle: {
    paddingHorizontal: 50,
  },
});
