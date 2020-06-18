import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, removeUser } from '../Redux/actions/authActions'

const Signup = (props) => {
  const user = useSelector(state => state.authReducer.user)
  const dispatch = useDispatch();
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