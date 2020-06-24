import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, removeUser } from '../../Redux/actions/authActions';
import { LoginForm, SocialLogin } from '../../Components'
import { loginStyles, CategoriesStyles } from '../../styles'
import { Tile, Divider } from 'react-native-elements';



const Categories = (props) => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={{ ...loginStyles.setFlex, backgroundColor: 'blue' }}>
            <ScrollView style={loginStyles.setFlex}>
                <View style={{ ...CategoriesStyles.titlesView, backgroundColor: 'green' }}>
                    <View style={{ ...CategoriesStyles.cardStyle, backgroundColor: 'red', height: '100%' }}>
                        <Text>Hello</Text>
                    </View>
                    <View style={loginStyles.setFlex}>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Categories;
