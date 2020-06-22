import React from 'react';
import
{
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { SocialLogin, SignupForm } from '../Components'
import { loginStyles, signupStyles } from '../styles';

const Signup = (props) =>
{
  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={loginStyles.setFlex}>
      <ScrollView style={loginStyles.setFlex}>
        <View style={{ flex: 4, marginTop: 20 }}>
          <Text style={signupStyles.txt}>Connect With</Text>
          <SocialLogin />
          <SignupForm />
        </View>
        <View style={loginStyles.loginView}>
          <Text style={signupStyles.baseText}>
            You must be at least 18 years old to sign up for Purple Ocean. &nbsp;
          <Text>By signing up you agree to the</Text>
            <Text style={signupStyles.innerText}> Privacy Policy&nbsp;</Text>
            <Text>and</Text>
            <Text style={signupStyles.innerText}> Terms of</Text>
            <Text style={signupStyles.service}> Service</Text>
          </Text>
          <Text style={signupStyles.baseText}>
            <Text style={signupStyles.innerText}>
              <Text>Already have an account?</Text>
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
