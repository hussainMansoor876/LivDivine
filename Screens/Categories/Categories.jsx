import React from 'react';
import
{
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
import { loginStyles, categories } from '../../styles'
import { Tile, Divider } from 'react-native-elements';



const Categories = (props) =>
{
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={loginStyles.setFlex}>
            <ScrollView style={loginStyles.setFlex}>

                <View style={categories.tiles}>
                    <Tile
                        //   imageSrc={require('./img/path')}
                        title="Tarot readings"
                        featured
                    // caption="Some Caption Text"
                    />
                    <Tile
                        //   imageSrc={require('./img/path')}
                        title="Psychic readings "
                        featured
                    // caption="Some Caption Text"
                    />
                </View>

                <View style={categories.tiles}>
                    <Tile
                        //   imageSrc={require('./img/path')}
                        title="Relationship coaching"
                        featured
                    // caption="Some Caption Text"
                    />
                    <Tile
                        //   imageSrc={require('./img/path')}
                        title="Palm readings"
                        featured
                    // caption="Some Caption Text"
                    />
                </View>
                <Divider style={{ backgroundColor: 'darkgrey', heigh: 1.5 }} />
                <View style={categories.tiles}>
                    <Tile
                        //   imageSrc={require('./img/path')}
                        title="Astrology & Horoscope "
                        featured
                    // caption="Some Caption Text"
                    />
                    <Tile
                        //   imageSrc={require('./img/path')}
                        title="Oracle guidance"
                        featured
                    // caption="Some Caption Text"
                    />
                </View>
                <Divider style={{ backgroundColor: 'darkgrey', heigh: 1.5 }} />
                <View style={categories.tiles}>
                    <Tile
                        //   imageSrc={require('./img/path')}
                        title="Angel insights"
                        featured
                    // caption="Some Caption Text"
                    />
                    <Tile
                        //   imageSrc={require('./img/path')}
                        title="Dream analysis"
                        featured
                    // caption="Some Caption Text"
                    />
                </View>


            </ScrollView>
        </SafeAreaView>
    );
};

export default Categories;
