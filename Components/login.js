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
import Aboutuser from './User'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, Item, Input, Icon, Fab } from 'native-base';
import { Button } from 'react-native-elements';
import {  Spinner } from 'native-base';

import Middilework from '../Redux/Middlewear/middlewear'
import { connect } from 'react-redux';
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Email: '',
      Password: '',
      userdata: '',
      error: '',
      check:false
    }
  }
  componentWillMount(props){
    console.log(props)
      }
      componentWillReceiveProps(NextProps){
        console.log(NextProps.state.Auth.user)
        console.log(NextProps.state.Auth.error)
if(NextProps.state.Auth.user === true){
  Actions.Home()
}else{
  if(NextProps.state.Auth.error){
    alert(NextProps.state.Auth.error)
    this.setState({
      check:false
    })
  }}
      }
Signin(){
  
  let SigninData ={ Email:this.state.Email,Password:this.state.Password}
  // alert(SigninData)
  this.setState({
    check:true
  })
  this.props.signIn(SigninData)
}
  render() {
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../Images/l2.png')}
      >
        <View style={styles.container}>
          <Image
            style={styles.stretch}

            source={require('../Images/logo.png')}
          />
          <Text style={styles.welcome}>Please Enter Your Account ID & Password</Text>

          <Item style={styles.text}>
            <Icon active name='ios-mail' style={{ fontSize: 30, color: 'green', left: 10 }} />
            <Input placeholder='Email'
              onChangeText={(Email) => this.setState({ Email })}
              keyboardType='email-address'
              
              value={this.state.Email} />
          </Item>
          <Item style={styles.text}>
            <Icon active name='ios-lock' style={{ fontSize: 30, color: 'green', left: 10 }} />

            <Input placeholder='Password'
              onChangeText={(Password) => this.setState({ Password })}
              keyboardType='default'

              secureTextEntry={true}
              value={this.state.Password} />
          </Item>

          <Text>{'\n'}</Text>
         
          {this.state.check ? <Spinner color='green'/> :
          <Button title="   Log-In   " onPress={() => this.Signin()} backgroundColor={'green'} style={{  width:'90%',fontSize: 40, color: 'green', left: 10 }} />
          }<Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.welcome}>If you Don`t Have Account a{'\n'}
              Please<Text onPress={() => Actions.Signup()} style={{ color: 'skyblue', fontSize: 20 }}> Register </Text></Text>
          </View>

        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ff6700',
  },
  welcome: {
    fontSize: 14,
    textAlign: 'center',
    // margin: 10,
    color: 'white'
  },
  stretch: {
    marginTop: 90,
    width: 300,
    height: 120,
    // flex:1
  },
  text: {
    width: '90%',
    height: 45,
    marginTop: 10,
    // color: 'white',
    // fontSize: 20,
    opacity: 0.7,
    // borderRadius: 100/2,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: 'white',
  },
});

function mapStateToProps(state) {
  return {
      state: state,
  };

}
function mapDispatchToProps(dispatch) {
  return {
      signIn: (signIndata) => dispatch(Middilework.signIn(signIndata)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);