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
  Image
} from 'react-native';
import BackgroundImage from './Back'
import {Router ,Stack,Scene,Actions} from'react-native-router-flux'

import Middilework from '../Redux/Middlewear/middlewear'
import { connect } from 'react-redux';
 class Loading extends Component {
  constructor(props) {
    super(props)
    this.state = {
       Check:false
    }
}
  componentWillReceiveProps(props){
    // console.log(NextProps.Doctordata.user)
    // console.log(NextProps.Doctordata.Auth.error)
this.setState({
  Check:props.state.Doctordata.user 
})
}
componentWillMount(props) {
  console.log(props)
  this.props.GetData()
}
componentDidMount(){
  setTimeout(() => { if(this.state.Check === true){
    Actions.Home()
  }
  else{
    Actions.login()
  }},5500)
}

  render() {
    return (
      <BackgroundImage>
        {/* {this.state.Check} */}
      {/* {  setTimeout(() => {
  

     this.state.Check? Actions.Home() :  Actions.Signin()},000)} */}
           </BackgroundImage>
   
       
    );
  }
}
function mapStateToProps(state) {
  return {
      state: state,
  };

}
function mapDispatchToProps(dispatch) {
  return {
    GetData: () => dispatch(Middilework.GetData()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Loading);