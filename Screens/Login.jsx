import React from 'react';
import {
  SafeAreaView, ScrollView, Text
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { LoginForm, SocialLogin } from '../Components'
import { loginStyles } from '../styles'

const user1 = { name: 'Mansoor Hussain' };

const Login = (props) => {
  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={loginStyles.setFlex}>
      <ScrollView style={loginStyles.setFlex}>

      <LoginForm />
      <SocialLogin />
      <Text style={loginStyles.dhaa}>Don't Have an Account</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
