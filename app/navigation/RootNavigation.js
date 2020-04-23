import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {BmiHome, BmiResult} from '../screens';

const Stack = createStackNavigator();

const headerOptions = {
  headerTitle: 'BMI CALCULATOR',
  headerTitleAlign: 'center',
  headerStyle: {backgroundColor: '#28335c'},
  headerTintColor: 'white',
  headerLeft: null,
};

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BmiHome"
        component={BmiHome}
        options={headerOptions}
      />
      <Stack.Screen
        name="BmiResult"
        component={BmiResult}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};
