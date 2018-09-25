/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground
} from 'react-native';
import {Router ,Stack,Scene,Actions} from'react-native-router-flux'
import {  Spinner } from 'native-base';
export default class BackgroundImage extends Component {
  render() {
    return (
        <View
        style={{ width: '100%', height: '100%' ,backgroundColor:'black'}}
        >
    
        <Text style={styles.welcome}>
        {/* <Text style={styles.text}>Paitent Tracker</Text> */}
        <Image
            style={styles.stretch}

            source={require('../Images/logo.png')}
          />
         </Text>
         <Spinner color='green'/>
         
         <Text style={styles.welcome1}>Please wait...</Text>

        </View>
  
       
    );
  }
}

const styles = StyleSheet.create({
 
  welcome: {
    // flex:2,
    marginTop:"60%",
    fontSize: 30,
    textAlign: 'center',      // margin: 10,
    color: 'white',
justifyContent: 'center',        
    fontFamily: "Roboto", 
  },  
  welcome1: {
    // flex:2,
    marginTop:"10%",
    fontSize: 20,
    textAlign: 'center',      // margin: 10,
    color: 'white',
justifyContent: 'center',        
    fontFamily: "Roboto", 
  },
      text: {
        fontSize: 50,
        textAlign: 'center',      // margin: 10,
        color: 'white',
        fontFamily: "Roboto", 
        fontWeight: 'bold'
      },
      stretch: {
        marginTop: 90,
        width: 800,
        height: 420,
        // flex:1
      },
  });
  
