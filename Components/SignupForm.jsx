import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { Icon, Input, Button } from 'react-native-elements'
import { loginStyles } from '../styles'
import client from '../Config/apollo'
import gql from 'graphql-tag';
import { SIGN_UP } from '../utils/authQueries'

const SignupForm = (props) => {
    const { navigation } = props
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPass: '',
        userNameErr: '',
        emailErr: '',
        passwordErr: '',
        confirmPassErr: '',
        isLoading: false
    })

    useEffect(() => {
        const { email, userName, password } = state
        client.mutate({ variables: { email, userName, password }, mutation: SIGN_UP })
            .then((res) => {
                console.log('mutation', res)
            })
            .catch((e) => console.log(e))
    }, [])

    const validateSignup = () => {
        const { userName, email, password, confirmPass } = state
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!userName.length || userName.length < 4) {
            return updateField({ userNameErr: 'Minimum 4 Characters required!' })
        }
        else if (reg.test(email) === false) {
            return updateField({ emailErr: 'Invalid Email!' })
        }
        else if (!password.length || password.length < 6) {
            return updateField({ passwordErr: 'Password length must be 6 Characters!' })
        }
        else if (password !== confirmPass) {
            return updateField({ confirmPassErr: 'Password did not match!' })
        }
        updateField({ isLoading: true })
        client.mutate({ variables: { email, userName, password }, mutation: SIGN_UP })
            .then((res) => {
                updateField({ isLoading: false })
                console.log('resp', res)
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
        <View style={loginStyles.loginView}>
            <Text style={{ textAlign: 'center', fontSize: 16, marginBottom: 20 }}>Or create an account</Text>
            <Input
                placeholder="Full Name"
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: state.userNameErr ? 'red' : '#000000' }}
                onChangeText={e => updateField({ userName: e })}
                name="userName"
                value={state.userName}
                errorMessage={state.userNameErr}
                onFocus={() => updateField({ userNameErr: '' })}
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                        type='font-awesome'
                    />
                }
            />
            <Input
                placeholder="Email"
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: state.emailErr ? 'red' : '#000000' }}
                onChangeText={e => updateField({ email: e })}
                name="email"
                value={state.email}
                errorMessage={state.emailErr}
                onFocus={() => updateField({ emailErr: '' })}
                leftIcon={
                    <Icon
                        name='mail'
                        size={24}
                        color='black'
                        type='foundation'
                    />
                }
            />
            <Input
                placeholder="Password"
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
                placeholder="Confirm Password"
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
                title="Register"
                buttonStyle={loginStyles.loginBtn}
                onPress={validateSignup}
                loading={state.isLoading}
            />
            <TouchableOpacity onPress={() => console.log('Hello')}>
                <Text style={loginStyles.forgotPas}>I forgot my Password</Text>
            </TouchableOpacity>
        </View>
    );
};


export default SignupForm;