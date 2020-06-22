import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { SocialLogin, SignupForm } from '../Components'
import { loginStyles } from '../styles';

const Signup = (props) => {
  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={loginStyles.setFlex}>
      <View style={{ flex: 4, marginTop: 20 }}>
        <Text style={styles.txt}>Connect With</Text>
        <SocialLogin />
        <SignupForm />
      </View>
      <View style={loginStyles.loginView}>
        <Text style={styles.baseText}>
          You must be at least 18 years old to sign up for Purple Ocean. &nbsp;
          <Text>By signing up you agree to the</Text>
          <Text style={styles.innerText}> Privacy Policy&nbsp;</Text>
          <Text>and</Text>
          <Text style={styles.innerText}> Terms of</Text>
          <Text style={styles.service}> Service</Text>
        </Text>
        <Text style={styles.baseText}>
          <Text style={styles.innerText}>
            <Text>Already have an account?</Text>
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  TextStyle: {
    textAlign: 'center',
    fontSize: 24,
  },
  social: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
  },
  txt: {
    textAlign: 'center',
  },
  baseText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerText: {
    color: 'orange',
  },

  service: {
    color: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialBtn: {},
});

export default Signup;
