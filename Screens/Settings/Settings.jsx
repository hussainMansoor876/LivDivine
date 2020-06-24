import React from 'react';
import {
    SafeAreaView, ScrollView, Text, Button, View
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../../Redux/actions/authActions';
import { LoginForm, SocialLogin } from '../../Components'
import { loginStyles, fields, settings } from '../../styles'
import { Divider } from 'react-native-elements'
import { Icon } from 'react-native-elements'




const Settings = (props) => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={loginStyles.setFlex}>
            <ScrollView style={loginStyles.setFlex}>
                <View style={{ backgroundColor: 'lightgrey', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text h1 style={settings.fieldsbold}>ACCOUNT</Text>
                    <Text h1 style={settings.fieldsbold}>Save</Text>
                </View>

                {/* <Text style={{ backgroundColor: 'lightgrey' }}></Text> */}
                {/* <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} /> */}
                <Text style={settings.fields}>User Name</Text>
                <Text style={settings.fields}>Email</Text>
                {/* <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} /> */}
                <Text style={settings.fields}>User ID</Text>
                {/* <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} /> */}
                <Text style={settings.fields}>Change password</Text>
                {/* <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} /> */}
                <Text style={settings.fields}>Retype password</Text>
                <Text></Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <View style={{ backgroundColor: 'lightgrey' }}><Text h1 style={settings.fieldsbold}>MORE INFORMATION</Text></View>
                <Text style={{ backgroundColor: 'lightgrey' }}></Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <Text style={settings.fields}>Version</Text>
                <Text></Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <Text style={settings.fields}>About us</Text>
                <Text></Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <Text style={settings.fields}>Terms of Service</Text>
                <Text></Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <Text style={settings.fields}>Privacy Policy</Text>
                <Text></Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />
                <Text style={settings.fields}>Purple Ocean website</Text>
                <Text></Text>
                <Divider style={{ backgroundColor: 'darkgrey', height: 1.5 }} />



            </ScrollView>
        </SafeAreaView>
    );
};

export default Settings;
