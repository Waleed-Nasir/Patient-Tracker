/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Alert,
  BackHandler,
  Image
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Aboutuser from './User'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer, Content, Card, CardItem, Input, Item, Switch, List, ListItem, Thumbnail, } from 'native-base';
import { Actions } from 'react-native-router-flux'
import { Avatar } from 'react-native-elements'
import { SearchBar } from 'react-native-elements'
import moment from 'moment';
import PaitentDetails from './PaitentDetails'
import Middilework from '../Redux/Middlewear/middlewear'
import { connect } from 'react-redux';
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Email: '',
      Password: '',
      Name: '',
      Serach: false,
      ItemSerach: '',
      isDateTimePickerVisible: false,
      date: '',
      PaitentsData: [],
      DetailKey: '',
      Detail: false,
      datedat: false
    }
  }
  componentWillReceiveProps(props) {
    console.log(props)
    console.log( this.props.navigation.state.params)
      this.setState({ ItemSerach: '', DetailKey: '' })
    console.log( this.props.navigation.state.params)
    // console.log(props.state.Doctordata.userdata.Paitents)
    if (props.state.Doctordata.user === true) {
      this.setState({
        PaitentsData: props.state.Doctordata.userdata.Paitents
      })
    }
    // console.log(this.state.PaitentsData)

  }
  componentWillMount(props) {
    console.log( this.props.navigation.state.params)
      this.setState({ ItemSerach: '',  DetailKey: ''})

    console.log(props)
    this.props.GetData()
  }
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    let today = date.getDate() + ":" + (date.getMonth() + 1) + ":" + date.getFullYear()

    this.setState({
      ItemSerach: '',
      date: today,
      DetailKey: '',
      
      ItemSerach: today
    })

    this._hideDateTimePicker();
  };

  closeDrawer() {
    this.drawer._root.close()
  };
  openDrawer() {
    this.drawer._root.open()
  };
  SerachCall() {
    this.setState({
      Serach: true,
      DetailKey: ''      
    })
  }
  Cancel() {
    this.setState({
      Serach: false,
      datedat: false,
      ItemSerach: '',
      DetailKey: '',
    })
  }
  MatchKey(key) {
    // alert(key)
    this.setState({
      DetailKey: key,
  
    })
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  // }
  onBackPress = () => {
    return true;

  }
  render() {
    return (
      <Drawer
        Drawerstyle={{ width: 40 }}
        ref={(ref) => { this.drawer = ref; }}
                panOpenMask={60}
        panCloseMask={0.3}
        // styles={drawerStyles}
        tweenHandler={(ratio) => ({
            main: { opacity: (2 - ratio) / 2 }
        }) }
        content={<Aboutuser navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >


        {/* ///////////////////////////For paitent Details/////////////////////////////// */}
          {Object.keys(this.state.PaitentsData).map((key) => {
            if (key === this.state.DetailKey) {
               Actions.Details(this.state.PaitentsData[key])
       
            }
          })}

        {/* ///////////////////////////View Header/////////////////////////////// */}

          <View>
            {this.state.Serach ? null :
              <Header androidStatusBarColor={'#ad360b'} style={{ backgroundColor: 'green' }}>
                <Left>
                  <Button transparent onPress={() => this.openDrawer()}>
                    <Icon name='menu' />
                  </Button>
                </Left>
                <Right>
                  <Title>Profile</Title>
                </Right>
              </Header>}

        {/* ///////////////////////////For paitent Search By Date  Area/////////////////////////////// */}
              
            {this.state.datedat ? <View style={{ flexDirection: 'row' }}>
              <SearchBar
                onFocus={() => this.SerachCall()}
                placeholder='Search By Date'
                containerStyle={{ width: '75%' }}
                placeholderTextColor="white"
                onChangeText={(ItemSerach) => this.setState({ ItemSerach })}
                value={this.state.ItemSerach} />
              <Button iconLeft large backgroundColor={'green'} onPress={this._showDateTimePicker}>
                <Icon name='ios-calendar' />

                <Text style={{ fontSize: 20, color: 'white' }} > Date  </Text>
              </Button>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker} />
        {/* ///////////////////////////For paitent Search By Name Area/////////////////////////////// */}
                
            </View> :
            
              <SearchBar
                onFocus={() => this.SerachCall()}
                placeholder='Search By Name'
                containerStyle={{ width: '100%' }}
                placeholderTextColor="white"
                onChangeText={(ItemSerach) => this.setState({ ItemSerach })}
                value={this.state.ItemSerach} />}
        {/* ///////////////////////////For paitent Search By Date Button/////////////////////////////// */}


            {this.state.datedat ?

              <View style={{ flexDirection: 'row', marginTop: '2%' }}>


                <Button onPress={() => this.setState({ datedat: false ,DetailKey:'', ItemSerach:''})} backgroundColor={'green'} style={{ color: 'green', marginLeft: '10%' }} >
                  <Title>    Search By Name   </Title>
                </Button>

                <Button onPress={() => this.Cancel()} backgroundColor={'red'} style={{ color: 'green', marginLeft: '10%' }} >
                  <Title>    Cancel   </Title>
                </Button>

              </View> : <View>
        {/* ///////////////////////////For paitent Search By Name Button/////////////////////////////// */}
                
                {this.state.Serach ?

                  <View style={{ flexDirection: 'row', marginTop: '2%' }}>


                    <Button onPress={() => this.setState({ datedat: true,DetailKey:'', ItemSerach:'' })} backgroundColor={'green'} style={{ color: 'green', marginLeft: '10%' }} >
                      <Title>    Search By Date   </Title>
                    </Button>

                    <Button onPress={() => this.Cancel()} backgroundColor={'red'} style={{ color: 'green', marginLeft: '10%' }} >
                      <Title>    Cancel   </Title>
                    </Button>

                  </View> : null}</View>}

        {/* ///////////////////////////For paitent Search End/////////////////////////////// */}


        {/* ///////////////////////////For paitent Search By Date Details/////////////////////////////// */}

            {this.state.datedat ? <ScrollView style={{height:'80%'}}>
            <List>
            
              {Object.keys(this.state.PaitentsData).filter(key =>
                this.state.PaitentsData[key].ConDate.search(this.state.ItemSerach) !== -1
              ).map((key) => {

                return <ListItem avatar onPress={() => this.MatchKey(key)}>
                  <Left>
                    <Avatar
                      medium
                      rounded
                      title={this.state.PaitentsData[key].Name[0]}
                      onPress={() => console.log("Works!")}
                      activeOpacity={0.7}
                      overlayContainerStyle={{ backgroundColor: 'green' }}
                    />
                  </Left>
                  <Body>
                    <Text style={{ fontSize: 25 }}>{this.state.PaitentsData[key].Name}</Text>
                    <Text note style={{ fontSize: 10, color: 'green', }}>See Paitent Detail`s Click on information circle </Text>
                  </Body>
                  <Right>
                    <Icon active name='ios-information-circle' style={{ fontSize: 30, color: 'green', }} />
                  </Right>
                </ListItem>
              })}
                </List>
              
            </ScrollView>
              :
              <ScrollView style={{height:'80%'}}>
        {/* ///////////////////////////For paitent Search By Name Button/////////////////////////////// */}
              
                <List>
                  {Object.keys(this.state.PaitentsData).filter(key =>
                    this.state.PaitentsData[key].Name.toUpperCase().search(this.state.ItemSerach.toUpperCase()) !== -1
                  ).map((key) => {

                    return <ListItem avatar onPress={() => this.MatchKey(key)}>
                      <Left>
                        <Avatar
                          medium
                          rounded
                          title={this.state.PaitentsData[key].Name[0]}
                          activeOpacity={0.7}
                          overlayContainerStyle={{ backgroundColor: 'green' }}
                        />
                      </Left>
                      <Body>
                        <Text style={{ fontSize: 25 }}>{this.state.PaitentsData[key].Name}</Text>
                        <Text note style={{ fontSize: 10, color: 'green', }}>See Paitent Detail`s Click on information circle </Text>
                      </Body>
                      <Right>
                        <Icon active name='ios-information-circle' style={{ fontSize: 30, color: 'green', }} />
                      </Right>
                    </ListItem>
                  })
                  }

                </List>
              </ScrollView>}
          </View>

      </Drawer>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);