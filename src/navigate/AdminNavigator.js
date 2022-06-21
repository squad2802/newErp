import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

const Drawer = createDrawerNavigator();
export default function AdminNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen />
    </Drawer.Navigator>
  );
}
