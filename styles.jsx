import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const Screen = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
};

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
const categoriesStyles = StyleSheet.create({
    titlesView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: Screen.height / 4
    },

    cardStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        height: '100%',
    }
})
const settingsStyles = StyleSheet.create({
    fields: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderTopColor: 'rgba(0, 0, 0, 0.5)',
        borderTopWidth: 1
    },
    fieldsbold: {
        marginLeft: 10,
        paddingTop: 20,
        fontWeight: 'bold'
    },

    header: {
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10
    }
})
export {
    loginStyles,
    signupStyles,
    categoriesStyles,
    settingsStyles,
}