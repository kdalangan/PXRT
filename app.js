import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../app/login';
import SignUpScreen from '../app/signup';
import Dashboard from '../app/dashboard';
import Upload from '../app/upload';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="upload" component={Upload} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
