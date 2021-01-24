/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Main from '../pages/Main';
import { BACKGROUND_COLOR } from '../theme';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="black" />
      <View style={styles.background}>
        <Main />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  background: {
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
  },
});
