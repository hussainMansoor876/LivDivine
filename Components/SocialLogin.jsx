import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { SocialIcon } from 'react-native-elements'
import { loginStyles } from '../styles'
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
GoogleSignin.configure();


const user1 = { name: 'Mansoor Hussain' };

const SocialLogin = (props) => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            GoogleSignin.signOut()
        } catch (error) {
            console.error(error);
        }
    }, [])

    const facebookLogin = () => {
        LoginManager.logInWithPermissions(['public_profile', 'email'])
            .then((result) => {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                }
                else {
                    AccessToken.getCurrentAccessToken()
                        .then((data) => {
                            const { accessToken } = data
                            console.log('data', accessToken)

                            const get_Response_Info = (error, result) => {
                                if (error) {
                                    console.log('Error fetching data: ' + error.toString());
                                } else {
                                    console.log('result', JSON.stringify(result))
                                }
                            };
                            const processRequest = new GraphRequest(
                                '/me?fields=name,email,picture.type(large)',
                                null,
                                get_Response_Info
                            );
                            new GraphRequestManager().addRequest(processRequest).start();
                        })
                }
            }
            )
            .catch((error) => {
                console.log('error', error)
            })
    }


    const signIn = async () => {
        try {
            // await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo', userInfo)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    return (
        <View>
            <View style={loginStyles.social}>
                <SocialIcon style={loginStyles.socialBtn} onPress={facebookLogin} title="Facebook" button type="facebook" />
                <SocialIcon style={loginStyles.socialBtn} title="Google" onPress={signIn} button type="google" />
            </View>
        </View>
    );
};


export default SocialLogin;