import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import AppNavigator from './Navigation/AppNavigator'

const App = () => {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
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
