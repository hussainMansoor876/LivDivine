import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { Icon, Input, Button, CheckBox } from 'react-native-elements'
import Spinner from 'react-native-loading-spinner-overlay';
import { loginStyles, categoriesStyles } from '../styles'
import client from '../Config/apollo'
import { SIGN_UP } from '../utils/authQueries'
import categoriesData from '../utils/categoriesData'

const BecomeAdvisorForm = (props) => {
    const { navigation } = props
    const user = useSelector(state => state.authReducer.user)
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
                const { signUp } = res.data
                if (signUp.success) {
                    dispatch(loginUser(signUp.user))
                }
                else {
                    Alert.alert(signUp.message)
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
        <View style={loginStyles.loginView}>
            <Spinner
                visible={state.isLoading}
                textContent={'Loading...'}
                textStyle={loginStyles.spinnerTextStyle}
            />
            <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 20, marginTop: -20, textDecorationLine: 'underline' }}>Become Advisor</Text>
            <Input
                placeholder="Full Name"
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: state.userNameErr ? 'red' : '#000000' }}
                onChangeText={updateField}
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
                placeholder="Title"
                secureTextEntry={true}
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: state.passwordErr ? 'red' : '#000000' }}
                onChangeText={e => updateField({ password: e })}
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
            <View style={{ ...loginStyles.inputLogin, marginRight: 10, marginLeft: 10, marginBottom: 10 }}>
                <Text style={{ fontSize: 20, margin: 20 }}>Select Categories</Text>
                {categoriesData.map((v, i) => {
                    return (
                        <View key={i} style={{ flexDirection: 'row', flex: 1 }}>
                            {v.map((y, j) => {
                                return (
                                    <CheckBox
                                        title={y.text}
                                        key={j}
                                        containerStyle={{ flex: 1, margin: 0, paddingLeft: 0 }}
                                    />
                                )
                            })}
                        </View>
                    )
                })}
            </View>
            <Button
                title="Register"
                buttonStyle={loginStyles.loginBtn}
                onPress={validateSignup}
            />
        </View>
    );
};


export default BecomeAdvisorForm;