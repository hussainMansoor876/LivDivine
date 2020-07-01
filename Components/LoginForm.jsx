import React, { useState, createRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { Icon, Input, Button } from 'react-native-elements'
import { gql } from "apollo-boost";
import client from '../Config/apollo'
import { loginStyles } from '../styles'


// const createItem = gql`
// mutation{
//   signUp(
//     email: "babar@gmail.com",
//     userName: "babarkaramat",
//     password: "123123123", isVerified: false){
//     token
//   }
// }`

// client.mutate({ mutation: createItem }).then((resp) => {
//   console.log('resp', resp)
// }).catch((error) => {
//   console.log(error)
// });

const user1 = { name: 'Mansoor Hussain' };

const LoginForm = (props) => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        email: '',
        password: '',
        emailErr: '',
        passwordErr: '',
        isLoading: false
    })

    const validateLogin = () => {
        const { email, password } = state
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            return updateField({ emailErr: 'Invalid Email!' })
        }
        else if (!password.length || password.length < 6) {
            return updateField({ passwordErr: 'Password length must be 6 Characters!' })
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
            <Button title="Login" buttonStyle={loginStyles.loginBtn} onPress={validateLogin} />
            <TouchableOpacity onPress={() => console.log('Hello')}>
                <Text style={loginStyles.forgotPas}>I forgot my Password</Text>
            </TouchableOpacity>
        </View>
    );
};


export default LoginForm;