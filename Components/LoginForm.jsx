import React, { useState, createRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { Icon, Input, Button } from 'react-native-elements'
import { loginStyles } from '../styles'


const user1 = { name: 'Mansoor Hussain' };

const LoginForm = (props) => {
    const emailInput = React.createRef();
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const validate = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            setErrMsg('Please input Valid Email!')
            emailInput.current.shake()
        }
        else {
            console.log("Email is Correct");
        }
    }
    return (
        <View style={loginStyles.loginView}>
            <Input
                placeholder="Email"
                inputContainerStyle={loginStyles.inputLogin}
                onChangeText={e => setEmail(e)}
                onBlur={validate}
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
                leftIcon={
                    <Icon
                        name='lock'
                        size={24}
                        color='black'
                        type='foundation'
                    />
                }
            />
            <Button title="Login" buttonStyle={loginStyles.loginBtn} onPress={() => dispatch(loginUser(user1))} />
            <TouchableOpacity onPress={() => console.log('Hello')}>
                <Text style={loginStyles.forgotPas}>I forgot my Password</Text>
            </TouchableOpacity>
        </View>
    );
};


export default LoginForm;