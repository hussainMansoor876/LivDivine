import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, removeUser } from '../Redux/actions/authActions'

const user1 = { name: 'Mansoor Hussain' }


const Login = (props) => {
  const user = useSelector(state => state.authReducer.user)
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Button title="Login" onPress={() => dispatch(loginUser(user1))} />
      <Button title="Logout" onPress={() => dispatch(removeUser())} />
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
