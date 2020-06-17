import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup } from '../Screens'

const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Login} />
                <Stack.Screen name="Notifications" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyStack