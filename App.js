import React from 'react';
import { Login, Recipe, SignIn, SignUp } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import Tabs from "./navigation/tabs";
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                />
                
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />

                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />
                <Stack.Screen
                    name="Recipe"
                    component={Recipe}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#f0fbfc'
    }
});



export default App;