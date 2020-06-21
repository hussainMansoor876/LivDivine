import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { SocialIcon } from 'react-native-elements'
import { loginStyles } from '../styles'

const user1 = { name: 'Mansoor Hussain' };

const SocialLogin = (props) => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    return (
        <View style={loginStyles.social}>
            <SocialIcon style={loginStyles.socialBtn} title="Facebook" button type="facebook" />
            <SocialIcon style={loginStyles.socialBtn} title="Google" button type="google" />
        </View>
    );
};


export default SocialLogin;