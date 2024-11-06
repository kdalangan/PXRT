import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

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
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>SETTINGS</Text>
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
          {/* Placeholder for recent projects - you can map through an array of projects */}
          <ProjectCard status="in-progress" errors={3} />
          <ProjectCard status="in-progress" errors={4} />
          <ProjectCard status="complete" />
          <ProjectCard status="complete" />
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

// Component for individual project cards
function ProjectCard({ status, errors }) {
  return (
    <View style={styles.projectCard}>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.projectImage} />
      <Text style={styles.projectStatus}>
        {status === 'in-progress' ? `${errors} errors detected\nIn progress` : 'Complete'}
      </Text>
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
    padding: 30,
    backgroundColor: '#FFD700', // Yellow header background
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#ffffff', // White background for tab navigation
  },
  tabButton: {
    backgroundColor: '#D9D9D9', // Light gray background color
    borderRadius: 20, // Rounded corners for the tab buttons
    paddingHorizontal: 15,
    paddingVertical: 8,
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
    color: '#1E90FF',
  },
  recentProjects: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  projectCard: {
    width: '48%',
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  projectImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  projectStatus: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 12,
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
