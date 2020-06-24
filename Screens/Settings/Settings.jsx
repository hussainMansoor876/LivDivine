import React from 'react';
import {
    SafeAreaView, ScrollView, Text, Button, View
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../../Redux/actions/authActions';
import { LoginForm, SocialLogin } from '../../Components'
import { loginStyles, SettingsStyles } from '../../styles'
import { Divider } from 'react-native-elements'
import { Icon } from 'react-native-elements'




const Settings = (props) => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={loginStyles.setFlex}>
            <ScrollView style={loginStyles.setFlex}>
                <View style={SettingsStyles.header}>
                    <Text h1 style={SettingsStyles.fieldsbold}>ACCOUNT</Text>
                    <Text h1 style={SettingsStyles.fieldsbold}>Save</Text>
                </View>
                <View>
                    <Text style={SettingsStyles.fields}>User Name</Text>
                    <Text style={SettingsStyles.fields}>Email</Text>
                    <Text style={SettingsStyles.fields}>User ID</Text>
                    <Text style={SettingsStyles.fields}>Change password</Text>
                    <Text style={SettingsStyles.fields}>Retype password</Text>
                </View>
                <View style={{ backgroundColor: 'lightgrey' }}>
                    <Text h1 style={SettingsStyles.fieldsbold}>MORE INFORMATION</Text>
                </View>
                <Text style={SettingsStyles.fields}>
                    Version
                    </Text>
                <Text style={SettingsStyles.fields}>About us</Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <Text style={SettingsStyles.fields}>Terms of Service</Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <Text style={SettingsStyles.fields}>Privacy Policy</Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <Text style={SettingsStyles.fields}>Purple Ocean website</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Settings;
