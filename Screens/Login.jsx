import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { loginUser, removeUser } from '../Redux/actions/authActions'

const user1 = { name: 'Mansoor' }


const Login = (props) => {
  const user = useSelector(state => state.user, shallowEqual)
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Button title="Text" onPress={() => dispatch(loginUser(user1))} />
      <Text style={styles.TextStyle}>Login {user?.name}</Text>
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
