import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { loginUser } from '../Redux/actions/authActions'

const user = { name: 'Mansoor' }


const Login = (props) => {
  const user = useSelector(state => state.user, shallowEqual)
  console.log('user', useSelector(state => state))
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Button title="Text" onPress={() => dispatch(loginUser(user))} />
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
