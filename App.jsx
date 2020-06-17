import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from "react-redux";
import store from './Redux/store';
import AppNavigator from './Navigation/AppNavigator'

const App = () => {
  return (
    <Provider store={store} >
      <AppNavigator />
    </Provider>
  )
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  highlight: {
    fontWeight: '700',
  }
});

export default App;
