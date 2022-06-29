import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EmailLogin from '../screens/EmailLogin';
import PhoneLogin from '../screens/PhoneLogin';

const Tab = createMaterialTopTabNavigator();

export default function AuthenticationPage() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Email" component={EmailLogin} />
      <Tab.Screen name="Phone" component={PhoneLogin} />
    </Tab.Navigator>
  );
}
