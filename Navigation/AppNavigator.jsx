import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup } from '../Screens'

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Login} />
            <Stack.Screen name="Notifications" component={Signup} />
        </Stack.Navigator>
    );
}

export default MyStack;