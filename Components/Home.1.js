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
  Image
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Aboutuser from './User'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer, Content, Card, CardItem, Input, Item, Switch, List, ListItem, Thumbnail, } from 'native-base';
import { Actions } from 'react-native-router-flux'
import { Avatar } from 'react-native-elements'
import { SearchBar } from 'react-native-elements'
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
      Detail: false
    }
  }
  componentWillReceiveProps(props) {
    console.log(props)
    
    // console.log(props.state.Doctordata.userdata.Paitents)
    if(props.state.Doctordata.user === true ){
    this.setState({
      PaitentsData: props.state.Doctordata.userdata.Paitents
    })}
    // console.log(this.state.PaitentsData)

  }
  componentWillMount(props) {
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
      ItemSerach: today
    })
    // if('2:12:2018' === this.state.ItemSerach){
    //   alert('yesd')
    // }
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
      Serach: true
    })
  }
  Cancel() {
    this.setState({
      Serach: false
    })
  }
  MatchKey(key) {
// alert(key)
    this.setState({
      DetailKey: key,
      Detail: true,
      Serach: true,
    })
  }
  render() {
    return (
      <Drawer
        Drawerstyle={{ width: 40 }}
        ref={(ref) => { this.drawer = ref; }}
        content={<Aboutuser navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
        {this.state.Detail ?
          Object.keys(this.state.PaitentsData).map((key) => {
            if (key === this.state.DetailKey) {
              return <View style={styles.container} >
                {/* <Image
                  style={styles.stretch}

                  source={require('../Images/logo.png')}
                /> */}

                <Text style={styles.welcome}> Your Paitent Detail`s</Text>

                <Item style={styles.text} >
                  <Icon active name='person' style={{ fontSize: 30, color: 'green', left: 10 }} />
                  <Text>  Name: {this.state.PaitentsData[key].Name}</Text>

                </Item>

                <Item style={styles.text}>
                  <Icon active name='md-information-circle' style={{ fontSize: 30, color: 'green', left: 10 }} />
                  <Text>  Age: {this.state.PaitentsData[key].Age}</Text>

                </Item>
                <Item style={styles.text}>
                  {/* Diseases */}
                  <Icon active name='ios-medkit' style={{ fontSize: 30, color: 'green', left: 10 }} />
                  <Text>  Diseases: {this.state.PaitentsData[key].Diseases}</Text>
                </Item>
                <Item style={styles.text}>
                  <Icon active name='ios-phone-portrait' style={{ fontSize: 30, color: 'green', left: 10 }} />
                  <Text>  Cell No:  {this.state.PaitentsData[key].Number}</Text>
                </Item>
                <Item style={styles.text}>
                  <Icon active name='md-calendar' style={{ fontSize: 30, color: 'green', left: 10 }} />
                  <Text>  Appointment Date:  {this.state.PaitentsData[key].ConDate} </Text>
                </Item>
                <Item style={styles.text}>
                  <Icon active name='md-calendar' style={{ fontSize: 30, color: 'green', left: 10 }} />
                  <Text>  Conformation Date: {this.state.PaitentsData[key].AppDate}</Text>
                </Item>
                <Item style={styles.text}>
                  <Icon active name='md-locate' style={{ fontSize: 30, color: 'green', left: 10 }} />
                  <Text>  Tracking ID:  {this.state.PaitentsData[key].Tarcking}</Text>

                </Item>

                <Text></Text>

                <Button  onPress={() =>this.setState({  Detail: false, Serach: false,ItemSerach:''})} backgroundColor={'green'} style={{ width:'30%',fontSize: 40, color: 'green', left: "20%"}} >
                  <Title>    GO Back  </Title>
                </Button>

              </View>
            }
          }) :
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


            <SearchBar
              onFocus={() => this.SerachCall()}
              placeholder='Search'
              containerStyle={{ width: '100%' }}
              placeholderTextColor="white"
              onChangeText={(ItemSerach) => this.setState({ ItemSerach })}
              value={this.state.ItemSerach} />
            <View>
              {this.state.Serach ?
                <View>

                  <View style={{ flexDirection: 'row', marginTop: '2%' }}>


                    <Button onPress={this._showDateTimePicker} backgroundColor={'green'} style={{ color: 'green', marginLeft: '10%' }} >
                      <Title>    Search By Date   </Title>
                    </Button>

                    <Button onPress={() => this.Cancel()} backgroundColor={'red'} style={{ color: 'green', marginLeft: '10%' }} >
                      <Title>    Cancel   </Title>
                    </Button>
                    <DateTimePicker
                      isVisible={this.state.isDateTimePickerVisible}
                      onConfirm={this._handleDatePicked}
                      onCancel={this._hideDateTimePicker} />
                  </View>
                  <List>
                    <ScrollView>
                      {this.state.PaitentsData ?
                        Object.keys(this.state.PaitentsData).map((key) => {
                        if (this.state.PaitentsData[key].AppDate === this.state.ItemSerach || this.state.PaitentsData[key].Name === this.state.ItemSerach ||
                          this.state.PaitentsData[key].Name[0] === this.state.ItemSerach || this.state.PaitentsData[key].Tarcking ===this.state.ItemSerach 
                          || this.state.PaitentsData[key].ConDate ===this.state.ItemSerach 
                        ) {
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


                              <Text note>3:43 pm</Text>
                            </Right>
                          </ListItem>
                        }

                      }):  <Text  style={{ fontSize: 30, color: 'green', }}>No Record Found</Text>
                    }
                    </ScrollView>

                  </List>
                </View>
                : null

              }


              {this.state.Serach ? null :
                <List>
                  <ScrollView>
                    {this.state.PaitentsData ?
                      Object.keys(this.state.PaitentsData).map((key) => {
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
                            <Text style={{ fontSize: 26 }}>{this.state.PaitentsData[key].Name}</Text>
                            <Text note style={{ fontSize: 10, color: 'green', }}>See Paitent Detail`s Click on information circle </Text>
                          </Body>
                          <Right>
                            <Icon active name='ios-information-circle' style={{ fontSize: 30, color: 'green', }} />


                            <Text note>3:43 pm</Text>
                          </Right>
                        </ListItem>
                      }) :  <Text  style={{ fontSize: 30, color: 'green', }}> No Paitents Record Found</Text>}
                  </ScrollView>

                </List>
              }


            </View>

          </View>}

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