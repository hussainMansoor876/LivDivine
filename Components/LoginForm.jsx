import React, { useState, createRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { Icon, Input, Button } from 'react-native-elements'
import { loginStyles } from '../styles'


const user1 = { name: 'Mansoor Hussain' };

const LoginForm = (props) => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState('')
    const [errPass, setErrPass] = useState('')
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const validateLogin = () => {
        const { email, password } = state
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            return setErrMsg('Please input Valid Email!')
        }
        if (password.length < 6) {
            return setErrPass('Password must be alteast 6 characters!')
        }

        dispatch(loginUser(user1))
    }

    const updateField = (obj) => {
        setState({
            ...state,
            ...obj
        })
    }

    return (
        <View style={loginStyles.loginView}>
            <Input
                placeholder="Email"
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: errMsg ? 'red' : '#000000' }}
                onChangeText={e => updateField({ email: e })}
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
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: errPass ? 'red' : '#000000' }}
                onChangeText={e => updateField({ password: e })}
                name="password"
                value={state.password}
                onFocus={() => setErrPass('')}
                errorMessage={errPass}
                leftIcon={
                    <Icon
                        name='lock'
                        size={24}
                        color='black'
                        type='foundation'
                    />
                }
            />
            <Button title="Login" buttonStyle={loginStyles.loginBtn} onPress={validateLogin} />
            <TouchableOpacity onPress={() => console.log('Hello')}>
                <Text style={loginStyles.forgotPas}>I forgot my Password</Text>
            </TouchableOpacity>
        </View>
    );
};


export default LoginForm;