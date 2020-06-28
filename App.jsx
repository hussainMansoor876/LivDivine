import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import AppNavigator from './Navigation'
import SplashScreen from 'react-native-splash-screen'


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  })


  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        <AppNavigator client={client} />
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
