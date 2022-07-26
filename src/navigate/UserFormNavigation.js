import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UpDateUserInformation from '../forms/UpDateUserInformation';
import InsertInformation from '../forms/InsertInformation';
import FormTwo from '../forms/FormTwo';
import FormThree from '../forms/FormThree';

const Stack = createNativeStackNavigator();
export default function ConnectForm() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstInfo"
        component={UpDateUserInformation}
        options={{title: 'Update Information'}}
      />
      <Stack.Screen
        name="SecondInfo"
        component={FormTwo}
        options={{title: 'Education'}}
      />
      <Stack.Screen
        name="ThirdInfo"
        component={FormThree}
        options={{title: 'Other Information'}}
      />
      <Stack.Screen
        name="InsertInformation"
        component={InsertInformation}
        options={{title: 'Insert Information'}}
      />
    </Stack.Navigator>
  );
}
