import React from 'react';
import { SafeAreaView, ScrollView, Text, Button, View, Image, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../../Redux/actions/authActions';
import { LoginForm, SocialLogin, SettingsForm, ChangePassword } from '../../Components'
import { loginStyles, AdvisorStyles } from '../../styles'
import { Icon } from 'react-native-elements'
import VideoPlayer from 'react-native-video-player'
import Screen from '../../utils/ScreenDimensions'



const AdvisorProfile = (props) => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={loginStyles.setFlex}>
            <ScrollView style={loginStyles.setFlex}>
                <View>
                    <VideoPlayer
                        video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                        videoWidth={1600}
                        videoHeight={900}
                        thumbnail={{ uri: 'https://res.cloudinary.com/dhspait8a/image/upload/v1595100989/cwbwopm3ys9hpkjaajw1.jpg' }}
                    />
                </View>
                <View style={{ ...AdvisorStyles.setFlex, ...AdvisorStyles.viewProfile }}>
                    <Image
                        source={{ uri: 'https://res.cloudinary.com/dhspait8a/image/upload/v1595100989/cwbwopm3ys9hpkjaajw1.jpg' }}
                        style={AdvisorStyles.profileImage}
                    />
                    <Text>Mansoor</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AdvisorProfile;
