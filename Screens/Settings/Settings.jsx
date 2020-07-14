import React from 'react';
import { SafeAreaView, ScrollView, Text, Button, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../../Redux/actions/authActions';
import { LoginForm, SocialLogin, SettingsForm, ChangePassword } from '../../Components'
import { loginStyles, settingsStyles } from '../../styles'
import { Divider } from 'react-native-elements'
import { Icon } from 'react-native-elements'




const Settings = (props) => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={loginStyles.setFlex}>
            <ScrollView style={loginStyles.setFlex}>
                <View style={settingsStyles.header}>
                    <Text h1 style={settingsStyles.fieldsbold}>ACCOUNT</Text>
                </View>
                <SettingsForm {...props} />
                <ChangePassword {...props} />
                {/* <View>
                    <Text style={settingsStyles.fields}>User Name</Text>
                    <Text style={settingsStyles.fields}>Email</Text>
                    <Text style={settingsStyles.fields}>User ID</Text>
                    <Text style={settingsStyles.fields}>Change password</Text>
                    <Text style={settingsStyles.fields}>Retype password</Text>
                </View>
                <View style={settingsStyles.header}>
                    <Text h1 style={settingsStyles.fieldsbold}>MORE INFORMATION</Text>
                </View>
                <Text style={settingsStyles.fields}>
                    Version
                    </Text>
                <Text style={settingsStyles.fields}>About us</Text>
                <Text style={settingsStyles.fields}>Terms of Service</Text>
                <Text style={settingsStyles.fields}>Privacy Policy</Text>
                <Text style={settingsStyles.fields}>Purple Ocean website</Text> */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Settings;
