import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Account from '../screens/account/Account';
import Login from '../screens/account/Login'
import Register from '../screens/account/Register';

const Stack = createStackNavigator();

export default function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="account"
                component={Account}
                option={{title: 'Account'}}
            />
            <Stack.Screen
                name="login"
                component={Login}
                option={{title: 'Log in'}}
            />
            <Stack.Screen
                name="register"
                component={Register}
                option={{title: 'Register user'}}
            />
        </Stack.Navigator>
    )
}