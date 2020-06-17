import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const Login = ({ navigation }) => {
  return (
      <SafeAreaView>
        <Text style={styles.TextStyle}>Login</Text>
      </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  TextStyle: {
    textAlign: 'center',
    fontSize: 24
  }
});

export default Login;
