import React from 'react';
import { SafeAreaView, ScrollView, Text, Button, View, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../../Redux/actions/authActions';
import { LoginForm, SocialLogin, SettingsForm, ChangePassword } from '../../Components'
import { loginStyles, AdvisorStyles } from '../../styles'
import { Icon } from 'react-native-elements'




const AdvisorProfile = (props) => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={{ ...loginStyles.setFlex, ...AdvisorStyles.viewProfile }}>
            <View style={AdvisorStyles.setFlex}>
                <Image
                    source={{ uri: 'https://res.cloudinary.com/dhspait8a/image/upload/v1595100989/cwbwopm3ys9hpkjaajw1.jpg' }}
                    style={AdvisorStyles.profileImage}
                />
                <Text>Mansoor</Text>
            </View>
        </SafeAreaView>
    );
};

export default AdvisorProfile;
