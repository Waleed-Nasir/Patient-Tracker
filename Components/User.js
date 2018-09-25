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
  Image,
  ImageBackground
} from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux'

import Middilework from '../Redux/Middlewear/middlewear'
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Right, Icon, Title, Drawer } from 'native-base';
import { Avatar } from 'react-native-elements'
 class Aboutuser extends Component {
constructor(){
  super()
  this.state={
    Name:[],
    Email:''
  }
}


    componentWillReceiveProps(props){
      console.log(props.state.Doctordata.userdata)
      if(props.state.Doctordata.user === true){
this.setState({
 Name:props.state.Doctordata.userdata.Username,
 Email:props.state.Doctordata.userdata.Email
})}
    
 }
 componentWillMount(props){
  console.log(props)
  this.props.GetData()
    }
      SignOut(){
        // alert('ppp')
        this.props.SignOut()
Actions.login()
      

      }
  render() {
    return (
  <View style={styles.container}>
        <Image style={{ width: '100%', height: '30%',backgroundColor:'black' }} source={require('../Images/logo.png')} />
        <Avatar
          large
          rounded
          title={this.state.Name[0]}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          overlayContainerStyle={{backgroundColor: 'green'}}
          containerStyle={{ marginTop: -40,marginLeft:"37%"}}
        />
        <Text style={styles.welcome}>Name: {this.state.Name} </Text>
        <Text style={styles.welcome}>Email: {this.state.Email} </Text>
       
      <View style={{flexDirection:'row',marginTop: 60,marginLeft:-10}}>
        <Button title="  Add Paitent   " onPress={() => Actions.AddPaitent()} backgroundColor={'green'} fontSize={16} rounded
         buttonStyle={{
          width: 130,margin:0 }}
        />
        <Button title="   Sign Out   " onPress={() => this.SignOut()} backgroundColor={'green'} fontSize={16} rounded
         buttonStyle={{
          width: 130 ,marginLeft:-13
         }}
        />
{console.log(this.state.Name[0])}
      </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    // textAlign: 'center',
    margin: 10,
    color: 'black',
    
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
function mapStateToProps(state) {
  return {
      state: state,
  };

}
function mapDispatchToProps(dispatch) {
  return {
    SignOut: () => dispatch(Middilework.SignOut()),
    GetData: () => dispatch(Middilework.GetData()),
    
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Aboutuser);