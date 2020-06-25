import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup, Advisors, Categories, FavoriteAdvisors, Home, Journey, Settings } from '../Screens';

const Stack = createStackNavigator();

function MyStack()
{
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="favorite">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="advisors" component={Advisors} />
        <Stack.Screen name="categories" component={Categories} />
        <Stack.Screen name="favorite" component={FavoriteAdvisors} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="journey" component={Journey} />
        <Stack.Screen name="settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
