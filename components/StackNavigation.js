import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import VerifyPage from './VerifyPage';
import NavigationPage from './NavigationPage';
import { SlideNavigation } from './SlideNavigation';
import MessagesPage from './MessagesPage';
import AllPosts from './AllPosts';

const Stack = createNativeStackNavigator();
export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Signup'
                screenOptions={
                    {
                        headerShown: false
                    }
                }
            >
                <Stack.Screen name='drawer' component={SlideNavigation} />
                <Stack.Screen name='Verify' component={VerifyPage} />
                <Stack.Screen name='Login' component={LoginPage} />
                <Stack.Screen name='Profile Page' component={ProfilePage} />
                <Stack.Screen name='Navigation' component={NavigationPage} />
                <Stack.Screen name='Messages' component={MessagesPage} />
                <Stack.Screen name='AllPosts' component={AllPosts} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}