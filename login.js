import React, { useLayoutEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true); 
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'LOG IN',
      headerStyle: {
        backgroundColor: '#D9D9D9', 
        height: 100, 
      },
      headerTitleStyle: {
        fontFamily: 'Poppins', 
        color: '#000', 
        paddingVertical: 10, 
      },
    });
  }, [navigation]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState); // Toggle password visibility
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* App Logo */}
      <Image source={require('../assets/pcb.png')} style={styles.logo} />

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={require('../assets/user.png')} style={styles.icon} />
          <TextInput placeholder="username" style={styles.input} />
        </View>
        <View style={styles.inputWrapper}>
          <Image source={require('../assets/password.png')} style={styles.icon} />
          <TextInput 
            placeholder="password" 
            style={styles.input} 
            secureTextEntry={!isPasswordVisible} // Toggle password visibility
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
            <Image 
              source={isPasswordVisible ? require('../assets/eyes.png') : require('../assets/eyess.png')} 
              style={styles.eyeIcon} 
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>SIGN IN</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>

      {/* Sign Up Option */}
      <Text style={styles.signUpText}>
        DON’T HAVE AN ACCOUNT? 
        <Text 
          style={styles.signUpLink} 
          onPress={() => navigation.navigate('signup')} // Navigate to SignUp screen
        >
            SIGN UP
        </Text>
      </Text>

      {/* Social Media Sign-In */}
      <Text style={styles.signUpUsing}>SIGN UP USING</Text>
      <View style={styles.socialIconsContainer}>
        <Image source={require('../assets/fb.png')} style={styles.icon} />
        <Image source={require('../assets/google.png')} style={styles.icon} />
        <Image source={require('../assets/apple.png')} style={styles.icon} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingBottom: 20, 
  },
  logo: {
    width: 500, // Increased width
    height: 400, // Increased height
    marginBottom: -100, // Reduce space below the logo
  },
  inputContainer: {
    width: '70%',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginVertical: 10,
  },
  icon: {
    width: 24, // Width of the icon
    height: 24, // Height of the icon
    marginRight: 10, // Space between the icon and the text input
  },
  input: {
    flex: 1, // Allow the TextInput to take remaining space
    padding: 10,
  },
  eyeIconContainer: {
    padding: 10,
    justifyContent: 'center', // Center the eye icon vertically
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  signInButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: '50%',
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 10,
    color: '#555',
  },
  signUpText: {
    marginTop: 20,
    fontSize: 12,
    color: '#000',
  },
  signUpLink: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 5,  // Add left margin for space from the previous text
    marginRight: 5, // Add right margin for space from the next text
    marginTop: 5,   // Add top margin for space above
  },
  signUpUsing: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
