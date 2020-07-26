import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { Input, Button, Icon } from 'react-native-elements'
import client from '../Config/apollo'
import { loginStyles, settingsStyles } from '../styles'
import Spinner from 'react-native-loading-spinner-overlay';
import { LOGIN } from '../utils/authQueries'
import FontIcon from 'react-native-vector-icons/FontAwesome';

const SettingsForm = (props) => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        currentPassword: '',
        password: '',
        confirmPass: '',
        currentPassErr: '',
        passwordErr: '',
        confirmPassErr: '',
        isLoading: false
    })

    const updateServer = (obj) => {
        client.mutate({ variables: obj, mutation: UPDATE_USER })
            .then((res) => {
                updateField({ isLoading: false })
                const { updateUser } = res.data
                if (updateUser.success) {
                    dispatch(loginUser(updateUser.user))
                    Alert.alert('Successfully Update Settings!')
                }
                else {
                    Alert.alert('Oops Something Went Wrong!')
                }
            })
            .catch((e) => Alert.alert('Oops Something Went Wrong!'))
    }

    const validateLogin = () => {
        const { email, password } = state
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!currentPassword.length || currentPassword.length < 6) {
            return updateField({ passwordErr: 'Password length must be 6 Characters!' })
        }
        else if (!password.length || password.length < 6) {
            return updateField({ passwordErr: 'Password length must be 6 Characters!' })
        }
        else if (password !== confirmPass) {
            return updateField({ confirmPassErr: 'Password did not match!' })
        }
        updateField({ isLoading: true })
        client.mutate({ variables: { email, password }, mutation: LOGIN })
            .then((res) => {
                console.log('res', res)
                updateField({ isLoading: false })
                const { signIn } = res.data
                console.log('signIn', signIn)
                if (signIn.success) {
                    dispatch(loginUser(signIn.user))
                }
                else {
                    Alert.alert(signIn.message)
                }
            })
            .catch((e) => console.log(e))
    }

    const updateField = (obj) => {
        setState({
            ...state,
            ...obj
        })
    }

    return (
        <View style={{ ...settingsStyles.settingsView, marginBottom: 30 }}>
            <Spinner
                visible={state.isLoading}
                textContent={'Loading...'}
                textStyle={loginStyles.spinnerTextStyle}
            />
            <Text style={settingsStyles.textStyle}>Change Password</Text>
            <Input
                placeholder="Current Password"
                secureTextEntry={true}
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: state.passwordErr ? 'red' : '#000000' }}
                onChangeText={e => updateField({ password: e })}
                name="password"
                value={state.password}
                errorMessage={state.passwordErr}
                onFocus={() => updateField({ passwordErr: '' })}
                leftIcon={
                    <Icon
                        name='lock'
                        size={24}
                        color='black'
                        type='foundation'
                    />
                }
            />
            <Input
                placeholder="New Password"
                secureTextEntry={true}
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: state.confirmPassErr ? 'red' : '#000000' }}
                onChangeText={e => updateField({ confirmPass: e })}
                name="confirmPass"
                errorMessage={state.confirmPassErr}
                value={state.confirmPass}
                errorMessage={state.confirmPassErr}
                onFocus={() => updateField({ confirmPassErr: '' })}
                leftIcon={
                    <Icon
                        name='lock'
                        size={24}
                        color='black'
                        type='foundation'
                    />
                }
            />
            <Input
                placeholder="Retype Password"
                secureTextEntry={true}
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: state.confirmPassErr ? 'red' : '#000000' }}
                onChangeText={e => updateField({ confirmPass: e })}
                name="confirmPass"
                errorMessage={state.confirmPassErr}
                value={state.confirmPass}
                errorMessage={state.confirmPassErr}
                onFocus={() => updateField({ confirmPassErr: '' })}
                leftIcon={
                    <Icon
                        name='lock'
                        size={24}
                        color='black'
                        type='foundation'
                    />
                }
            />
            <Button
                title="UPDATE PASSWORD"
                buttonStyle={loginStyles.loginBtn}
                onPress={validateLogin}
            />
        </View>
    );
};


export default SettingsForm;