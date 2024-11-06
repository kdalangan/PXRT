import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from 'react-native-vector-icons'; // For checkmark icon

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, User!</Text>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabNavigation}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>PROJECTS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>SIMULATION</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Recent Projects Section */}
        <View style={styles.projectsHeader}>
          <Text style={styles.recentProjectsHeader}>Recent Projects</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <View style={styles.recentProjects}>
          {/* Add more recent projects by adding additional ProjectCard components */}
          <ProjectCard status="in-progress" errors={3} />
          <ProjectCard status="in-progress" errors={4} />
          <ProjectCard status="complete" />
          <ProjectCard status="complete" />
          <ProjectCard status="in-progress" errors={2} />
          <ProjectCard status="complete" />
          <ProjectCard status="in-progress" errors={1} />
          <ProjectCard status="in-progress" errors={5} />
        </View>
      </ScrollView>

      {/* Bottom Navigation Section */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomButton}>
          <Image source={require('../assets/notification.png')} style={styles.icon} />
          <Text style={styles.bottomText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.captureButton}>
          <Image source={require('../assets/camera.png')} style={styles.captureIcon} />
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

// Component for individual project cards
function ProjectCard({ status, errors }) {
  return (
    <View style={styles.projectCard}>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.projectImage} />
      <View style={styles.projectStatusContainer}>
        <Text style={styles.projectStatus}>
          {status === 'in-progress' 
            ? `${errors} errors detected`
            : 'Complete'}
        </Text>
        {status === 'in-progress' ? (
          <ActivityIndicator size="small" color="#0000ff" style={styles.loadingIndicator} />
        ) : (
          <MaterialCommunityIcons name="check-circle" size={20} color="green" style={styles.checkIcon} />
        )}
      </View>
    </View>
  );
}

// Define prop types for ProjectCard component
ProjectCard.propTypes = {
  status: PropTypes.string.isRequired,
  errors: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingBottom: 20,
    backgroundColor: '#FFD700',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginLeft: 140,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 10,
  },
  tabNavigation: {
    flexDirection: 'row',
    justifyContent: 'center',  // Centers the buttons horizontally
    paddingVertical: 15,
    backgroundColor: '#ffffff',
  },
  tabButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: 1, // Add spacing between buttons
  },
  tabText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  scrollContainer: {
    padding: 20,
  },
  projectsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  recentProjectsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    color: '#000000',
  },
  recentProjects: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  projectCard: {
    width: '48%',
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  projectImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  projectStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  projectStatus: {
    textAlign: 'center',
    marginRight: 5,
    fontSize: 12,
  },
  loadingIndicator: {
    marginLeft: 5,
  },
  checkIcon: {
    marginLeft: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    paddingVertical: 0,
  },
  bottomButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  captureButton: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 30,
  },
  captureIcon: {
    width: 75,
    height: 75,
    marginTop: -20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  bottomText: {
    fontSize: 15,
  },
});
