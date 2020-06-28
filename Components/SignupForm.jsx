import React, { useState, createRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { Icon, Input, Button } from 'react-native-elements'
import { loginStyles } from '../styles'


const user1 = { name: 'Mansoor Hussain' };

const SignupForm = (props) => {
    const emailInput = React.createRef();
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [state, setState] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPass: ''
    })

    const validateSignup = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            setErrMsg('Please input Valid Email!')
        }
        else {
            console.log("Email is Correct");
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
                secureTextEntry={true}
                inputContainerStyle={loginStyles.inputLogin}
                onChangeText={e => updateField('userName', e)}
                name="userName"
                value={state.userName}
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
                placeholder="Email"
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: errMsg ? 'red' : '#000000' }}
                onChangeText={e => updateField('email', e)}
                name="email"
                value={state.email}
                onFocus={() => setErrMsg('')}
                ref={emailInput}
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
            <Button title="Register" buttonStyle={loginStyles.loginBtn} onPress={() => dispatch(loginUser(user1))} />
            <TouchableOpacity onPress={() => console.log('Hello')}>
                <Text style={loginStyles.forgotPas}>I forgot my Password</Text>
            </TouchableOpacity>
        </View>
    );
};


export default SignupForm;