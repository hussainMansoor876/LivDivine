import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Button,
  YellowBox,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {loginUser, removeUser} from '../Redux/actions/authActions';
import {InputButton} from '../Components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {color} from 'react-native-reanimated';
import {SocialIcon} from 'react-native-elements';

const user1 = {name: 'Mansoor Hussain'};

const Login = props => {
  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Input
        placeholder="E-mail"
        leftIcon={{type: 'Font-Awesome', name: 'chevron-left'}}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
      />
      <Button title="Login" onPress={() => dispatch(loginUser(user1))} />
      <Text />
      <Button title="I forgot my Password" type="clear" />
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
});

export default Login;
