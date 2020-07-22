import React, { useState } from "react";
import { Image, View, Dimensions } from "react-native";
import { useSelector } from 'react-redux';
import {
    Content,
    Text,
    List,
    ListItem,
    Container,
    Left,
    Right
} from "native-base";
import styles from "./style";
import { Icon } from 'react-native-elements'

const { width, height } = Dimensions.get('window')
const drawerCover = require('../assets/drawer-cover.png');
const drawerImage = require("../assets/logo-kitchen-sink.png");
const dummyImage = require('../assets/dummyImage.png')
const datas = [
    {
        name: "Home",
        route: "Home",
        icon: "home",
        bg: "#C5F442"
    },
    {
        name: "All advisors",
        route: "Advisors",
        icon: "user",
        bg: "#DA4437"
    },
    {
        name: "Categories",
        route: "Categories",
        icon: "th-large",
        bg: "#C5F442"
    },
    {
        name: "My Orders",
        route: "MyOrders",
        icon: "shopping-cart",
        bg: "#C5F442"
    },
    {
        name: "Favorite Advisors",
        route: "FavoriteAdvisors",
        icon: "heart",
        bg: "#4DCAE0"
    },
    {
        name: "Become Advisor",
        route: "BecomeAdvisor",
        icon: "user-plus",
        bg: "#1EBC7C"
    },
    {
        name: "Settings",
        route: "Settings",
        icon: "cog",
        bg: "#477EEA"
    },
    {
        name: "Logout",
        route: "Logout",
        icon: "arrow-up",
        bg: "#B89EF5",
        types: "8"
    }
];

const advisorData = [
    {
        name: "My Jobs",
        route: "Home",
        icon: "home",
        bg: "#C5F442"
    },
    {
        name: "Revenues",
        route: "Advisors",
        icon: "bitcoin",
        bg: "#DA4437"
    },
    {
        name: "Journeys",
        route: "Categories",
        icon: "th-large",
        bg: "#C5F442"
    },
    {
        name: "Settings",
        route: "Settings",
        icon: "cog",
        bg: "#477EEA"
    },
    {
        name: "Logout",
        route: "Logout",
        icon: "arrow-up",
        bg: "#B89EF5",
        types: "8"
    }
];

const SideBar = (props) => {
    const user = useSelector(state => state.authReducer.user)
    const [isAdvisor, setAdvisor] = useState(false)
    return (
        <Container>
            <Content
                bounces={false}
                style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
            >
                <Image source={drawerCover} style={styles.drawerCover} />
                <View style={styles.drawerView}>
                    <Image style={styles.drawerImage} source={dummyImage} />
                    <Text style={styles.drawerText} >{user.userName}</Text>
                </View>
                <List
                    dataArray={advisorData}
                    renderRow={(data, index) =>
                        <ListItem
                            button
                            onPress={() => props.navigation.navigate(data.route)}
                            key={index.toString()}
                        >
                            <Left>
                                <Icon
                                    active
                                    name={data.icon}
                                    type="font-awesome"
                                    style={{ color: "#777", fontSize: 26, width: 30 }}
                                />
                                <Text style={styles.text}>
                                    {data.name}
                                </Text>
                            </Left>
                        </ListItem>}
                />
            </Content>
        </Container>
    );
}

export default SideBar;
