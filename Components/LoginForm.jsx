import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../Redux/actions/authActions';
import { Icon, Input, SocialIcon, Button } from 'react-native-elements'

const user1 = { name: 'Mansoor Hussain' };

const Login = (props) => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    return (
        <View style={styles.loginView}>
            <Input
                placeholder="Email"
                inputContainerStyle={styles.inputLogin}
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
                inputContainerStyle={styles.inputLogin}
                leftIcon={
                    <Icon
                        name='lock'
                        size={24}
                        color='black'
                        type='foundation'
                    />
                }
            />
            <Button title="Login" buttonStyle={styles.loginBtn} onPress={() => dispatch(loginUser(user1))} />
        </View>
    );
};

const styles = StyleSheet.create({
    setFlex: {
        flex: 1
    },
    loginView: {
        flex: 1,
        marginRight: 10,
        marginLeft: 10,
        paddingTop: 20
    },
    TextStyle: {
        textAlign: 'center',
        fontSize: 24,
    },
    connect: {
        marginTop: 20,
        textAlign: 'center',
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 20,
    },
    dhaa: {
        marginTop: 20,
        textAlign: 'center',
        color: 'orange',
        fontWeight: 'normal',
        fontSize: 20,
    },
    social: {
        flexDirection: 'row',
    },
    inputLogin: {
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15,
    },
    loginBtn: {
        borderRadius: 8,
        width: '96%',
        marginLeft: '2%',
        height: 46
    }
});

export default Login;