import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ProgressBarAndroid } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PCBAnalyzerScreen() {
  const [progress, setProgress] = useState(0.5); 
  const [imageUri, setImageUri] = useState(null); 
  const navigation = useNavigation(); 

  const handleBack = () => {
    navigation.goBack(); 
  };

  // Function to simulate image capture (can be replaced with actual camera logic)
  const handleCapture = () => {
    // Replace this with actual image capture logic
    setImageUri('https://example.com/your-image.jpg'); // Example image URI
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
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.imagePreview} />
        ) : (
          <Text style={styles.imagePreviewText}>No image captured</Text>
        )}
        <ProgressBarAndroid 
          styleAttr="Horizontal" 
          indeterminate={false} 
          progress={progress} 
          color="black"
          style={styles.progressBar}
        />
        <Text style={styles.progressText}>Analyzing... {Math.round(progress * 100)}%</Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Ensure the PCB image is clear for accurate error detection</Text>
        <View style={styles.viewResultsButtonsContainer}>
          {/* View Results Button with White Container */}
          <TouchableOpacity style={[styles.viewResultsButton, styles.viewResultsButtonContainer]}>
            <View style={styles.whiteContainer}>
              <FontAwesome name="view" size={24} color="black" />
              <Text style={styles.viewResultsText}>View Results</Text>
            </View>
          </TouchableOpacity>
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
          <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
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
    justifyContent: 'flex-start',
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
    paddingHorizontal: 50,
    borderRadius: 50,
  },
  uploadText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imagePreviewContainer: {
    alignItems: 'center',
    marginTop: 200,
    marginBottom: 40,
    width: '100%', 
  },
  imagePreviewText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  imagePreview: {
    width: 300,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  progressBar: {
    width: '80%',
    height: 10,
    marginTop: 10,
    alignSelf: 'center', 
  },
  progressText: {
    marginTop: 5,
    color: 'gray',
    textAlign: 'center', 
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  footerText: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 50,
  },
  viewResultsButtonsContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    width: '100%',
    marginBottom: -30,
  },
  viewResultsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  viewResultsButtonContainer: {
    backgroundColor: '#575757', 
  },
  whiteContainer: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10, 
    paddingHorizontal: 25, 
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
  },
  viewResultsText: {
    marginLeft: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 1, 
    backgroundColor: '#e0e0e0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  navButton: {
    alignItems: 'center',
    marginBottom: 200, 
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
