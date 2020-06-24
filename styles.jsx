import React from 'react';
import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
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
        marginTop: 10,
        textAlign: 'center',
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 16,
    },
    dhaa: {
        marginTop: 10,
        textAlign: 'center',
        color: 'orange',
        fontWeight: 'normal',
        fontSize: 16,
        marginBottom: 10
    },
    social: {
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10,
    },
    inputLogin: {
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15,
        borderColor: '#000000'
    },
    loginBtn: {
        borderRadius: 8,
        width: '96%',
        marginLeft: '2%',
        height: 46
    },
    socialBtn: {
        flex: 1
    },
    forgotPas: {
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16,
        color: '#24a0ed',
    }
})

const signupStyles = StyleSheet.create({
    TextStyle: {
        textAlign: 'center',
        fontSize: 24,
    },
    social: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
    },
    txt: {
        textAlign: 'center',
    },
    baseText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    innerText: {
        color: 'orange',
    },

    service: {
        color: 'orange',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
const categories = StyleSheet.create({
    tiles: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
const SettingsStyles = StyleSheet.create({
    fields: {
        marginRight: 10,
        marginLeft: 10,
        paddingTop: 20,
    },
    fieldsbold: {
        marginRight: 10,
        marginLeft: 10,
        paddingTop: 20,
        fontWeight: 'bold'
    },

    header: {
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    }
})
export {
    loginStyles,
    signupStyles,
    categories,
    SettingsStyles,
}