import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { SocialIcon } from 'react-native-elements'
import { loginStyles } from '../styles'
import { LoginManager } from 'react-native-fbsdk';

const user1 = { name: 'Mansoor Hussain' };

const SocialLogin = (props) => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();

    const facebookLogin = () => {
        LoginManager.logInWithPermissions(['public_profile', 'email'])
            .then((result) => {
                console.log('result', result)
                if (result.isCancelled) {
                    console.log("Login cancelled");
                }
                else {
                    console.log("Login success with permissions: " + result.grantedPermissions.toString())
                }
            }
            )
            .catch((error) => {
                console.log('error', error)
            })
    }
    return (
        <View>
            <View style={loginStyles.social}>
                <SocialIcon style={loginStyles.socialBtn} onPress={facebookLogin} title="Facebook" button type="facebook" />
                <SocialIcon style={loginStyles.socialBtn} title="Google" button type="google" />
            </View>
        </View>
    );
};


export default SocialLogin;