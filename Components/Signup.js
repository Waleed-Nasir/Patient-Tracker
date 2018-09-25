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
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import { Button } from 'react-native-elements';
import {  Spinner } from 'native-base';

import Middilework from '../Redux/Middlewear/middlewear'
import { connect } from 'react-redux';
class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Email: '',
      Password: '',
      Username: '',
      error: '',
      check:false
    }
  }

  componentWillMount(props) {
    console.log(props)
  }
  componentWillReceiveProps(NextProps) {
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
  Signup() {
    let signUpdata = {
      Username: this.state.Username,
      Email: this.state.Email,
      Password: this.state.Password
    }
    this.props.signUp(signUpdata)
    this.setState({
      check:true
    })
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
          <Text style={styles.welcome}>Please Enter Your Detail`s</Text>
          <Item style={styles.text}>
            <Icon active name='person' style={{ fontSize: 30, color: 'green', left: 10 }} />
            <Input placeholder='User Name' onChangeText={(Username) => this.setState({ Username })}
              keyboardType='default'
            
              value={this.state.Username} />
          </Item>
          <Item style={styles.text}>
            <Icon active name='ios-mail' style={{ fontSize: 30, color: 'green', left: 10 }} />
            <Input placeholder='Email' onChangeText={(Email) => this.setState({ Email })}
              keyboardType='email-address'
            
              value={this.state.Email} />
          </Item>
          <Item style={styles.text}>
            <Icon active name='ios-lock' style={{ fontSize: 30, color: 'green', left: 10 }} />
            <Input placeholder='Password' onChangeText={(Password) => this.setState({ Password })}
              keyboardType='default'

              secureTextEntry={true}
              value={this.state.Password} />
          </Item>

          <Text></Text>
          {this.state.check ? <Spinner color='green'/> :
          <Button title="   Sign Up   " onPress={() => this.Signup()} backgroundColor={'green'} style={{  width:'90%',fontSize: 40, color: 'green', left: 10 }} />
          }
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.welcome}> You Have a Account {'\n'}
              Please<Text onPress={() => Actions.login()} style={{ color: 'skyblue', fontSize: 20 }}> Login </Text></Text>
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
    marginTop: 80,
    width: 220,
    height: 85,
    // flex:1
  },
  text: {
    width: '90%',
    height: 45,
    marginTop: 5,
    opacity: 0.7,
    // color: 'white',
    // fontSize: 20,
    // borderRadius: 50/2,
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
    signUp: (signUpdata) => dispatch(Middilework.signUp(signUpdata)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);