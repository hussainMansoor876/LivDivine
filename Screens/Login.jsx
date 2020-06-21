import React from 'react';
import {
  SafeAreaView, TouchableOpacity, StyleSheet, View, Text, Button
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { Icon } from 'react-native-elements'
import { Input } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements';

const user1 = { name: 'Mansoor Hussain' };

const Login = props => {
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
              reverse
              name='ios-american-football'
              type='ionicon'
              color='#517fa4'
            />
          }
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          inputStyle={styles.inputLogin}
          leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        />
        <Button title="Login" onPress={() => dispatch(loginUser(user1))} />
      </View>
      <TouchableOpacity>
        <Text>I forgot my Password</Text>
      </TouchableOpacity>
      <Text style={styles.connect}>Or Connect With</Text>
      <View style={styles.social}>
        <SocialIcon title="Facebook" button type="facebook" />
        <SocialIcon title="Google" button type="twitter" />
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

  button: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 10,
    textAlign: 'center',
  },
  inputLogin: {
    borderColor: '#000000',
    borderWidth: 1,
  }
});

export default Login;
