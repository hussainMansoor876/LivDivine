import React, { useEffect } from 'react';
import {
  SafeAreaView, ScrollView, Text, Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { LoginForm, SocialLogin } from '../Components'
import { loginStyles } from '../styles'

const logo = require('../assets/logo.png')

const user1 = { name: 'Mansoor Hussain' };

const Login = (props) => {
  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeUser())
  }, [])

  return (
    <SafeAreaView style={loginStyles.setFlex}>
      <ScrollView style={loginStyles.setFlex}>
        <Image
          source={logo}
          style={loginStyles.logoImg}
        />
        <LoginForm {...props} />
        <SocialLogin {...props} />
        <Text style={loginStyles.dhaa}>Don't Have an Account</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
