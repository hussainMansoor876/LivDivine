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
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        userName: user.userName,
        userNameErr: '',
        isLoading: false
    })

    console.log('user', user)

    const validateLogin = () => {
        const { email, password } = state
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            return updateField({ emailErr: 'Invalid Email!' })
        }
        else if (!password.length || password.length < 6) {
            return updateField({ passwordErr: 'Password length must be 6 Characters!' })
        }
        updateField({ isLoading: true })
        client.mutate({ variables: { email, password }, mutation: LOGIN })
            .then((res) => {
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
        <View style={settingsStyles.settingsView}>
            <Spinner
                visible={state.isLoading}
                textContent={'Loading...'}
                textStyle={loginStyles.spinnerTextStyle}
            />
            <Text style={settingsStyles.textStyle}>Profile Setting</Text>
            <Input
                placeholder="User Name"
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: state.userNameErr ? 'red' : '#000000' }}
                onChangeText={e => updateField({ userName: e })}
                name="email"
                value={state.userName}
                errorMessage={state.userNameErr}
                onFocus={() => updateField({ emailErr: '' })}
                leftIcon={
                    <FontIcon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
            />
            {user.email ? <Input
                placeholder="Email"
                inputContainerStyle={loginStyles.inputLogin}
                name="email"
                value={user.email}
                disabled
                leftIcon={
                    <Icon
                        name='mail'
                        size={24}
                        color='black'
                        type='foundation'
                    />
                }
            /> : null}
            <Input
                placeholder="User ID"
                inputContainerStyle={{ ...loginStyles.inputLogin }}
                value={user.id?.slice(0, 25)}
                disabled
                leftIcon={
                    <FontIcon
                        name='slack'
                        size={24}
                        color='black'
                    />
                }
            />
            <Button
                title="UPDATE SETTING"
                buttonStyle={loginStyles.loginBtn}
                onPress={validateLogin}
            />
        </View>
    );
};


export default SettingsForm;