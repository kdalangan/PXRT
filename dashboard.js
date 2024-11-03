import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
        <Text style={styles.greeting}>Hello, User!</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Rounded Rectangles for Navigation */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.buttonText}>Simulation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.buttonText}>Projects</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Projects Section */}
        <Text style={styles.recentProjectsHeader}>Recent Projects</Text>
        <View style={styles.recentProjects}>
          {/* Placeholder for recent projects, you can map through an array of projects */}
          <Text style={styles.projectItem}>Project 1</Text>
          <Text style={styles.projectItem}>Project 2</Text>
          <Text style={styles.projectItem}>Project 3</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation Section */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomButton}>
          <Image source={require('../assets/notification.png')} style={styles.icon} />
          <Text style={styles.bottomText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Image source={require('../assets/camera.png')} style={styles.icon} />
          <Text style={styles.bottomText}>Capture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Image source={require('../assets/settings.png')} style={styles.icon} />
          <Text style={styles.bottomText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#D9D9D9',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  roundedButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentProjectsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  recentProjects: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
  },
  projectItem: {
    paddingVertical: 10,
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
  },
  bottomButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  bottomText: {
    fontSize: 12,
  },
});
