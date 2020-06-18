import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const Signup = (props) => {
  return (
      <SafeAreaView style={styles.TextStyle}>
        <Text>Signup</Text>
      </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  TextStyle: {
    textAlign: 'center',
    fontSize: 24
  }
});

export default Signup;