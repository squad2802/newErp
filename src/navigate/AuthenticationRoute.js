// ================================================ wrap authentication ==========================================
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UserEmailLogin from '../screens/UserEmailLogin';
import UserPhoneLogin from '../screens/UserPhoneLogin';

const Tab = createMaterialTopTabNavigator();

export default function AuthenticationPage() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Email" component={UserEmailLogin} />
      <Tab.Screen name="Phone" component={UserPhoneLogin} />
    </Tab.Navigator>
  );
}
