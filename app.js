import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../app/login';  // Path to LoginScreen
import SignUpScreen from '../app/signup'; // Path to SignUpScreen
import Dashboard from '../app/dashboard'; // Path to Dashboard

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen 
          name="login" 
          component={LoginScreen} 
          options={{
            headerShown: false, // Hide the header and back button on Login page
          }}
        />
        <Stack.Screen 
          name="signup" 
          component={SignUpScreen} 
          options={{
            headerShown: false, // Hide the header for the SignUp Screen
          }}
        />
        <Stack.Screen 
          name="dashboard" 
          component={Dashboard} 
          options={{
            headerShown: false, // Hide the default header for Dashboard
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
