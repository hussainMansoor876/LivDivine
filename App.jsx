import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Provider } from "react-redux";
import store from './Redux/store';

const App = () => {
  return (
    <Provider store={store} >
      <SafeAreaView>
        <Text>hello</Text>
      </SafeAreaView>
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
