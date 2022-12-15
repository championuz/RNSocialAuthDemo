import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen =() => {
    return (
      <View style={styles.container}>
       <Text style={styles.title}>Welcome to the HomeScreen</Text>
        <Text style={styles.label}>Logged in as UserName </Text> 
      
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    title: {
      fontSize: 24,
      marginBottom: 24,
      fontWeight: '900',
      textAlign: 'center',
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 24,
      padding: 8,
      width: '100%',
    },
    error: {
      color: 'red',
      marginBottom: 24,
    },
    signInButton: {
      backgroundColor: '#0077ff',
      padding: 12,
      marginBottom: 10,
      width: '100%',
    },
    signInButtonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });
  
export default HomeScreen