import React, { useState, createRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { Icon, Input, Button } from 'react-native-elements'
import { loginStyles } from '../styles'


const user1 = { name: 'Mansoor Hussain' };

const SignupForm = (props) => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState('')
    const [state, setState] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPass: ''
    })

    const validateSignup = () => {
        const { userName, email, password, confirmPass } = state
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!userName.length || userName.length < 4) {
            return
        }
        else if (reg.test(email) === false) {
            setErrMsg('Please input Valid Email!')
        }
        else if (!password.length || password.length < 6) {

        }
        else if (password !== confirmPass) {
            return
        }
    }

    const updateField = (name, value) => {
        setState({
            ...state,
            [name]: value
        })
    }
    return (
        <View style={loginStyles.loginView}>
            <Text style={{ textAlign: 'center', fontSize: 16, marginBottom: 20 }}>Or create an account</Text>
            <Input
                placeholder="Full Name"
                inputContainerStyle={loginStyles.inputLogin}
                onChangeText={e => updateField('userName', e)}
                name="userName"
                value={state.userName}
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
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: errMsg ? 'red' : '#000000' }}
                onChangeText={e => updateField('email', e)}
                name="email"
                value={state.email}
                onFocus={() => setErrMsg('')}
                errorMessage={errMsg}
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
                inputContainerStyle={loginStyles.inputLogin}
                onChangeText={e => updateField('password', e)}
                name="password"
                value={state.password}
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
                inputContainerStyle={loginStyles.inputLogin}
                onChangeText={e => updateField('confirmPassword', e)}
                name="confirmPassword"
                errorMessage={errMsg}
                value={state.confirmPassword}
                leftIcon={
                    <Icon
                        name='lock'
                        size={24}
                        color='black'
                        type='foundation'
                    />
                }
            />
            <Button title="Register" buttonStyle={loginStyles.loginBtn} onPress={() => console.log('hello')} />
            <TouchableOpacity onPress={() => console.log('Hello')}>
                <Text style={loginStyles.forgotPas}>I forgot my Password</Text>
            </TouchableOpacity>
        </View>
    );
};


export default SignupForm;