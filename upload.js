import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ProgressBarAndroid } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PCBAnalyzerScreen() {
  const [progress, setProgress] = useState(0.5); // Mock progress value
  const navigation = useNavigation(); // Initialize navigation

  // Handle back button press
  const handleBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadText}>UPLOAD IMAGE</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Image Preview Section */}
      <View style={styles.imagePreviewContainer}>
        <Text style={styles.imagePreviewText}>Image Preview</Text>
        <ProgressBarAndroid 
          styleAttr="Horizontal" 
          indeterminate={false} 
          progress={progress} 
          color="black"
          style={styles.progressBar}
        />
        <Text style={styles.progressText}>Analyzing... {Math.round(progress * 100)}%</Text>
      </View>

      {/* Footer Section (above Bottom Navigation) */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Ensure the PCB image is clear for accurate error detection</Text>
        <View style={styles.viewResultsButton}>
          <FontAwesome name="cloud-upload" size={24} color="black" />
          <Text style={styles.viewResultsText}>View Results</Text>
        </View>
      </View>

      {/* Bottom Navigation Section */}
      <View style={styles.bottomNav}>
        {/* Left - Upload Image */}
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="cloud-upload" size={40} color="black" />
          <Text style={styles.navButtonText}>Upload Image</Text>
        </TouchableOpacity>

        {/* Center - Capture Image */}
        <View style={styles.captureContainer}>
          <TouchableOpacity style={styles.captureButton}>
            <FontAwesome name="camera" size={60} color="black" />
          </TouchableOpacity>
          <Text style={styles.captureButtonText}>Capture Image</Text>
        </View>

        {/* Right - Run Simulation */}
        <TouchableOpacity style={styles.navButton}>
          <MaterialIcons name="play-arrow" size={40} color="black" />
          <Text style={styles.navButtonText}>Run Simulation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  uploadText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imagePreviewContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  imagePreviewText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  progressBar: {
    width: '80%',
    height: 10,
    marginTop: 10,
  },
  progressText: {
    marginTop: 5,
    color: 'gray',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 10,
  },
  viewResultsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 150,
  },
  viewResultsText: {
    marginLeft: 10,
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 1, // Reduced padding to give more space for buttons above
    backgroundColor: '#e0e0e0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Ensure it's layered below the footer
  },
  navButton: {
    alignItems: 'center',
    marginBottom: 200, // Adjusted to move the button upwards
  },
  navButtonText: {
    marginTop: 5,
    fontSize: 12,
  },
  captureContainer: {
    alignItems: 'center',
    marginBottom: 250, 
    marginTop: -50, 
  },
  captureButton: {
    backgroundColor: '#FFD700',
    borderRadius: 50,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 8,
  },
  captureButtonText: {
    fontSize: 12,
    color: 'black',
  },
});
