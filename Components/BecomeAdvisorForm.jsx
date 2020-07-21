import React, { useState, useEffect } from 'react';
import { View, Image, Text, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { Icon, Input, Button, CheckBox } from 'react-native-elements'
import Spinner from 'react-native-loading-spinner-overlay';
import { loginStyles, AdvisorStyles } from '../styles'
import client from '../Config/apollo'
import { SIGN_UP } from '../utils/authQueries'
import categoriesData from '../utils/categoriesData'
import FontIcon from 'react-native-vector-icons/FontAwesome';
import StepIndicator from 'react-native-step-indicator';
import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';

const labels = ["General", "Profile", "Instructions", "Intro", "Categories"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
}

const BecomeAdvisorForm = (props) => {
    const { navigation } = props
    const user = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState(null)
    const [state, setState] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPass: '',
        userNameErr: '',
        emailErr: '',
        passwordErr: '',
        confirmPassErr: '',
        isLoading: false,
        currentPosition: 0
    })

    const handleChoosePhoto = () => {
        const options = {
            noData: true,
        }
        ImagePicker.showImagePicker(options, response => {
            if (response.uri) {
                console.log('response.uri', response.uri)
                setPhoto(response)
            }
        })
    }

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
            <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 20, marginTop: 20, textDecorationLine: 'underline' }}>Become Advisor</Text>
            <StepIndicator
                customStyles={customStyles}
                currentPosition={state.currentPosition}
                labels={labels}
            />
            {state.currentPosition === 0 ? <View>
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
                        <FontIcon
                            name='slack'
                            size={24}
                            color='black'
                        />
                    }
                />

                {photo && (
                    <Image
                        source={{ uri: photo.uri }}
                        style={{ width: 150, height: 150, marginRight: 10, marginLeft: 10, borderRadius: 250 }}
                    />
                )}
                <Button title="Choose Photo" buttonStyle={{ ...loginStyles.loginBtn, width: 150 }} onPress={handleChoosePhoto} />
            </View> : null}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <Button icon={
                    <FontIcon
                        name='arrow-left'
                        size={24}
                        color='#fff'
                    />
                }
                    buttonStyle={{ width: 150 }}
                    disabled={!state.currentPosition}
                    onPress={() => updateField({ currentPosition: state.currentPosition - 1 })}
                />
                <Button icon={
                    <FontIcon
                        name='arrow-right'
                        size={24}
                        color='#fff'
                    />
                }
                    buttonStyle={{ width: 150 }}
                    onPress={() => updateField({ currentPosition: state.currentPosition + 1 })}
                    disabled={state.currentPosition === 5}
                />
            </View>
            {/* <Input
                placeholder="About my services"
                secureTextEntry={true}
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: state.passwordErr ? 'red' : '#000000' }}
                onChangeText={e => updateField({ password: e })}
                value={state.password}
                errorMessage={state.passwordErr}
                onFocus={() => updateField({ passwordErr: '' })}
                leftIcon={
                    <FontIcon
                        name='slack'
                        size={24}
                        color='black'
                    />
                }
            />
            <Input
                placeholder="Aboutme"
                secureTextEntry={true}
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: state.passwordErr ? 'red' : '#000000' }}
                onChangeText={e => updateField({ password: e })}
                value={state.password}
                errorMessage={state.passwordErr}
                onFocus={() => updateField({ passwordErr: '' })}
                leftIcon={
                    <FontIcon
                        name='slack'
                        size={24}
                        color='black'
                    />
                }
            />
            <View style={{ ...loginStyles.inputLogin, marginRight: 10, marginLeft: 10, marginBottom: 10, paddingTop: 20, paddingBottom: 20 }}>
                <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 5 }}>Select Categories</Text>
                {categoriesData.map((v, i) => {
                    return (
                        <View key={i} style={{ flexDirection: 'row', flex: 1 }}>
                            {v.map((y, j) => {
                                return (
                                    <CheckBox
                                        title={y.text}
                                        key={j}
                                        containerStyle={AdvisorStyles.checkBox}
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
            /> */}
        </View>
    );
};


export default BecomeAdvisorForm;