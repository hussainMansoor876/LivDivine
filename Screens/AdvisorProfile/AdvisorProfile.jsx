import React from 'react';
import { SafeAreaView, ScrollView, Text, Button, View, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../../Redux/actions/authActions';
import { LoginForm, SocialLogin, SettingsForm, ChangePassword } from '../../Components'
import { loginStyles, settingsStyles } from '../../styles'
import { Icon } from 'react-native-elements'




const AdvisorProfile = (props) => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={loginStyles.setFlex}>
            <View>
                <Image
                    source={{ uri: 'https://res.cloudinary.com/dhspait8a/image/upload/v1595100989/cwbwopm3ys9hpkjaajw1.jpg' }}
                    style={{ width: 60, height: 60, marginRight: 10, marginLeft: 10, borderRadius: 50, marginTop: 10 }}
                />
            </View>
        </SafeAreaView>
    );
};

export default AdvisorProfile;
