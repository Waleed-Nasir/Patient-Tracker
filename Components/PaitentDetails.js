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
  BackHandler
} from 'react-native';
import Aboutuser from './User'
import { Actions } from 'react-native-router-flux'

import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer, Content, Card, CardItem, Input, Item, Switch, List, ListItem, Thumbnail, } from 'native-base';
import Action from '../Redux/Action/Action';
export default class PaitentDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      PaitentsData: [],
 
    }
  }
  componentWillReceiveProps(props){
    console.log(props)
  }
componentWillMount(props){
    console.log( this.props.navigation.state.params)
  console.log(this.props.data)
this.setState({
  PaitentsData: this.props.navigation.state.params
})

}
componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  // }
  onBackPress = () => {
    this.props.navigation.goBack()

  }
render (){
    return (<View style={styles.container} >

        <Text style={styles.welcome}> Your Paitent Detail`s</Text>

        <Item style={styles.text} >
          <Icon active name='person' style={{ fontSize: 30, color: 'green', left: 10 }} />
          <Text>  Name: {this.state.PaitentsData.Name}</Text>

        </Item>

        <Item style={styles.text}>
          <Icon active name='md-information-circle' style={{ fontSize: 30, color: 'green', left: 10 }} />
          <Text>  Age: {this.state.PaitentsData.Age}</Text>

        </Item>
        <Item style={styles.text}>
          {/* Diseases */}
          <Icon active name='ios-medkit' style={{ fontSize: 30, color: 'green', left: 10 }} />
          <Text>  Diseases: {this.state.PaitentsData.Diseases}</Text>
        </Item>
        <Item style={styles.text}>
          <Icon active name='ios-phone-portrait' style={{ fontSize: 30, color: 'green', left: 10 }} />
          <Text>  Cell No:  {this.state.PaitentsData.Number}</Text>
        </Item>
        <Item style={styles.text}>
          <Icon active name='md-calendar' style={{ fontSize: 30, color: 'green', left: 10 }} />
          <Text>  Appointment Date:  {this.state.PaitentsData.ConDate} </Text>
        </Item>
        <Item style={styles.text}>
          <Icon active name='md-calendar' style={{ fontSize: 30, color: 'green', left: 10 }} />
          <Text>  Conformation Date: {this.state.PaitentsData.AppDate}</Text>
        </Item>
        <Item style={styles.text}>
          <Icon active name='md-locate' style={{ fontSize: 30, color: 'green', left: 10 }} />
          <Text>  Tracking ID:  {this.state.PaitentsData.Tarcking}</Text>

        </Item>

        <Text></Text>

        <Button onPress={() => this.props.navigation.goBack(false)} backgroundColor={'green'} style={{ width: '30%', fontSize: 40, color: 'green', left: "20%" }} >
          <Title>    GO Back  </Title>
        </Button>

      </View>
 
   
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  stretch: {
    marginTop: 20,
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