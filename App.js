/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
console.disableYellowBox = true;
import React from 'react';

import {RootNavigation} from './app/navigation';

const App: () => React$Node = () => {
  return <RootNavigation />;
};

export default App;
