import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FormOne from '../forms/FormOne';
import FormTwo from '../forms/FormTwo';
import FormThree from '../forms/FormThree';

const Stack = createNativeStackNavigator();
export default function ConnectForm() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FirstInfo" component={FormOne} />
      <Stack.Screen name="SecondInfo" component={FormTwo} />
      <Stack.Screen name="ThirdInfo" component={FormThree} />
    </Stack.Navigator>
  );
}
