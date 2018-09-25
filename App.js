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
  BackHandler,
  Alert
} from 'react-native';
import {Toast} from 'native-base';

import {Router ,Stack,Scene,Actions,ActionConst} from'react-native-router-flux'
import Home from './Components/Home';
import PaitentDetails from './Components/PaitentDetails';
import Login from './Components/login';
import Signup from './Components/Signup';
import AddPaitent from './Components/AddPaitent';
import {Provider} from 'react-redux'
import store from './Redux/Store'
import {Config} from './firebase';
import firebase from 'firebase'
import Loading from './Components/Loading';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      showToast: false
    }
  firebase.initializeApp(Config);
    
  }

  render() {
    return (
      <Provider store={store}>
      
      <Router>
          
      <Stack key="root"  >
      <Scene key="load" component={Loading} hideNavBar={true} type={ActionConst.RESET}  />
      <Scene key="login" component={Login} hideNavBar={true} type={ActionConst.RESET} />
      <Scene key="Signup" component={Signup} hideNavBar={true} />               
        <Scene key="Home"  duration={0} component={Home}  hideNavBar={true} />
        <Scene key="Details" component={PaitentDetails}  hideNavBar={true} />
        <Scene key="AddPaitent" component={AddPaitent}  hideNavBar={true} />


      </Stack>
    </Router>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
