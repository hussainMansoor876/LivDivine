import React, { Component } from "react";
import { Image } from "react-native";
import {
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge
} from "native-base";
import styles from "./style";

const drawerCover = require('../assets/drawer-cover.png');
const drawerImage = require("../assets/logo-kitchen-sink.png");
const datas = [
    {
        name: "Home",
        route: "Home",
        icon: "phone-portrait",
        bg: "#C5F442"
    },
    {
        name: "All advisors",
        route: "Advisors",
        icon: "arrow-down",
        bg: "#DA4437"
    },
    {
        name: "Categories",
        route: "Categories",
        icon: "repeat",
        bg: "#C5F442"
    },
    {
        name: "My Orders",
        route: "MyOrders",
        icon: "easel",
        bg: "#C5F442"
    },
    {
        name: "Favorite Advisors",
        route: "FavoriteAdvisors",
        icon: "notifications",
        bg: "#4DCAE0"
    },
    {
        name: "Become Advisors",
        route: "BecomeAdvisors",
        icon: "radio-button-off",
        bg: "#1EBC7C"
    },
    {
        name: "Settings",
        route: "Settings",
        icon: "arrow-up",
        bg: "#477EEA"
    },
    // {
    //     name: "Logout",
    //     route: "NHCard",
    //     icon: "keypad",
    //     bg: "#B89EF5",
    //     types: "8"
    // }
];

const SideBar = (props) => {
    return (
        <Container>
            <Content
                bounces={false}
                style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
            >
                <Image source={drawerCover} style={styles.drawerCover} />
                <Image square style={styles.drawerImage} source={drawerImage} />

                <List
                    dataArray={datas}
                    renderRow={(data, key) =>
                        <ListItem
                            button
                            noBorder
                            onPress={() => props.navigation.navigate(data.route)}
                            key={key}
                        >
                            <Left>
                                <Icon
                                    active
                                    name={data.icon}
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
