import React from 'react';
import {
  SafeAreaView, TouchableOpacity, StyleSheet, View, Text
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { Icon, Input, SocialIcon, Button } from 'react-native-elements'

const user1 = { name: 'Mansoor Hussain' };

const Login = (props) => {
  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.setFlex}>
      <View style={styles.loginView}>
        <Input
          placeholder="Email"
          labelStyle={styles.inputLogin}
          leftIcon={
            <Icon
              name='mail'
              size={24}
              color='black'
              type='foundation'
            />
          }
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          inputContainerStyle={styles.inputLogin}
          leftIcon={
            <Icon
              name='lock'
              size={24}
              color='black'
              type='foundation'
            />
          }
        />
        <Button title="Login" containerStyle={styles.loginBtn} onPress={() => dispatch(loginUser(user1))} />
      </View>
      <TouchableOpacity>
        <Text>I forgot my Password</Text>
      </TouchableOpacity>
      <Text style={styles.connect}>Or Connect With</Text>
      <View style={styles.social}>
        <SocialIcon title="Facebook" button type="facebook" />
        <SocialIcon title="Google" button type="google" />
      </View>
      <Text style={styles.dhaa}>Don't Have an Account</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  setFlex: {
    flex: 1
  },
  loginView: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10
  },
  TextStyle: {
    textAlign: 'center',
    fontSize: 24,
  },
  connect: {
    marginTop: 20,
    textAlign: 'center',
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 20,
  },
  dhaa: {
    marginTop: 20,
    textAlign: 'center',
    color: 'orange',
    fontWeight: 'normal',
    fontSize: 20,
  },
  social: {
    flexDirection: 'row',
  },
  inputLogin: {
    borderColor: '#000000',
    borderWidth: 1,
  },
  loginBtn:{
    borderRadius: 8
  }
});

export default Login;
