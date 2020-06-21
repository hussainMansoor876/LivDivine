import React from 'react';
import {
  SafeAreaView, View, Text
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { Icon, Input, SocialIcon } from 'react-native-elements'
import { LoginForm } from '../Components'
import { loginStyles } from '../styles'

const user1 = { name: 'Mansoor Hussain' };

const Login = (props) => {
  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={loginStyles.setFlex}>
      <LoginForm />
      <Text style={loginStyles.connect}>Or Connect With</Text>
      <View style={loginStyles.social}>
        <SocialIcon title="Facebook" button type="facebook" />
        <SocialIcon title="Google" button type="google" />
      </View>
      <Text style={loginStyles.dhaa}>Don't Have an Account</Text>
    </SafeAreaView>
  );
};

export default Login;
