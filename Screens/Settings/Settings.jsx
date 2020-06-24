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

                {/* <Text style={{ backgroundColor: 'lightgrey' }}></Text> */}
                {/* <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} /> */}
                <Text style={SettingsStyles.fields}>User Name</Text>
                <Text style={SettingsStyles.fields}>Email</Text>
                {/* <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} /> */}
                <Text style={SettingsStyles.fields}>User ID</Text>
                {/* <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} /> */}
                <Text style={SettingsStyles.fields}>Change password</Text>
                {/* <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} /> */}
                <Text style={SettingsStyles.fields}>Retype password</Text>
                <Text></Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <View style={{ backgroundColor: 'lightgrey' }}><Text h1 style={SettingsStyles.fieldsbold}>MORE INFORMATION</Text></View>
                <Text style={{ backgroundColor: 'lightgrey' }}></Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <Text style={SettingsStyles.fields}>Version</Text>
                <Text></Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <Text style={SettingsStyles.fields}>About us</Text>
                <Text></Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <Text style={SettingsStyles.fields}>Terms of Service</Text>
                <Text></Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <Text style={SettingsStyles.fields}>Privacy Policy</Text>
                <Text></Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <Text style={SettingsStyles.fields}>Purple Ocean website</Text>
                <Text></Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />



            </ScrollView>
        </SafeAreaView>
    );
};

export default Settings;
