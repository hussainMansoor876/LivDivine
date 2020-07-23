import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { Input, Button, Icon } from 'react-native-elements'
import client from '../Config/apollo'
import { loginStyles, settingsStyles } from '../styles'
import Spinner from 'react-native-loading-spinner-overlay';
import { UPDATE_USER } from '../utils/authQueries'
import FontIcon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob'

const SettingsForm = (props) => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        userName: user.userName,
        userNameErr: '',
        isLoading: false
    })


    const validateLogin = () => {
        const { userName } = state
        const { id } = user
        if (!userName.length || userName.length < 4) {
            return updateField({ userNameErr: 'Minimum 4 Characters required!' })
        }
        updateField({ isLoading: true })
        client.mutate({ variables: { id, userName }, mutation: UPDATE_USER })
            .then((res) => {
                updateField({ isLoading: false })
                const { updateUser } = res.data
                if (updateUser.success) {
                    dispatch(loginUser(updateUser.user))
                }
                else {
                    Alert.alert('Oops Something Went Wrong!')
                }
            })
            .catch((e) => Alert.alert('Oops Something Went Wrong!'))
    }

    const handleChoosePhoto = async () => {
        const options = {
            noData: true,
            quality: 0.5
        }
        ImagePicker.showImagePicker(options, response => {
            if (response.uri) {
                uploadFile(response)
                    .then(response => response.json())
                    .then((result) => {
                        console.log('result', result)
                    })
                    .catch((e) => console.log('e', e.message))
            }
        })
    }

    const uploadFile = (file) => {
        console.log('file', file)
        return RNFetchBlob.fetch('POST', 'https://api.cloudinary.com/v1_1/dzkbtggax/image/upload?upload_preset=livdivine', {
            'Content-Type': 'multipart/form-data'
        }, [
            { name: 'file', filename: file.fileName, data: RNFetchBlob.wrap(file.uri) }
        ])
    }

    const handleUpload = (image) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'livdivine')
        data.append("cloud_name", "dzkbtggax")
        fetch("https://api.cloudinary.com/v1_1/dzkbtggax/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                console.log('data', data)
            })
            .catch(err => {
                console.log('err', err)
                Alert.alert("An Error Occured While Uploading")
            })
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
            <Button title="Choose Photo" buttonStyle={{ ...loginStyles.loginBtn, width: 150 }} onPress={handleChoosePhoto} />
            <Input
                placeholder="User Name"
                inputContainerStyle={{ ...loginStyles.inputLogin, borderColor: state.userNameErr ? 'red' : '#000000' }}
                onChangeText={e => updateField({ userName: e })}
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