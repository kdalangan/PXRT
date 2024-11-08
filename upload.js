import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ProgressBarAndroid } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function PCBAnalyzerScreen() {
  const [progress, setProgress] = useState(0.5); // Mock progress value

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
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

      {/* Bottom Navigation Section */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="cloud-upload" size={24} color="black" />
          <Text style={styles.navButtonText}>Upload Image</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.captureButton}>
          <FontAwesome name="camera" size={50} color="yellow" />
          <Text style={styles.navButtonText}>Capture Image</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <MaterialIcons name="play-arrow" size={24} color="black" />
          <Text style={styles.navButtonText}>Run Simulation</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Ensure the PCB image is clear for accurate error detection</Text>
        <View style={styles.viewResultsButton}>
          <FontAwesome name="cloud-upload" size={24} color="black" />
          <Text style={styles.viewResultsText}>View Results</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
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
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    marginTop: 5,
    fontSize: 12,
  },
  captureButton: {
    alignItems: 'center',
    backgroundColor: '#FFD700',
    borderRadius: 100,
    padding: 15,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: 'gray',
  },
  viewResultsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  viewResultsText: {
    marginLeft: 10,
    fontSize: 14,
  },
});
