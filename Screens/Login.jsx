import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import {}


const Login = (props) => {
  console.log('***',useSelector(state => state ))
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
