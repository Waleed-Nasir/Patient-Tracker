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
    Image,
    ImageBackground

} from 'react-native';
import { Spinner } from 'native-base';

import DateTimePicker from 'react-native-modal-datetime-picker';
import Aboutuser from './User'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import { Button } from 'react-native-elements';
import moment from 'moment';
import Middilework from '../Redux/Middlewear/middlewear'
import { connect } from 'react-redux';
class AddPaitent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Pname: '',
            Page: '',
            Pnumber: '',
            Pdesaess: '',
            Tarcking: '',
            ConDate: '',
            AppDate: '',
            check: false

        }
    }
    componentWillMount(props) {
        // this.props.GetData()
        console.log(this.props)
        this.setState({
            Tarcking: moment().format('Dhmmss'),
            AppDate: moment().format('MMMM Do YYYY')
        })
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
    onBackPress = () => {
        this.props.navigation.goBack();

    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        let today = date.getDate() + ":" + (date.getMonth() + 1) + ":" + date.getFullYear()

        this.setState({
            ConDate: '',
            ConDate: today,
        })
        // if('2:12:2018' === this.state.ItemSerach){
        //   alert('yesd')
        // }
        this._hideDateTimePicker();
    };
    Paitent() {
        var dataadd = {
            Name: this.state.Pname,
            Age: this.state.Page,
            Number: this.state.Pnumber,
            Diseases: this.state.Pdesaess,
            Tarcking: this.state.Tarcking,
            AppDate: this.state.AppDate,
            ConDate: this.state.ConDate
        }
        if (this.state.Pname === '' || this.state.Page === "" || this.state.Pnumber === "" || this.state.Pdesaess === ""
            || this.state.ConDate === "") {
            alert('Please fill Complete Form ')
            this.setState({
                check: false
            })
        } else {
            // Name,Age,Number,Diseases,Tarcking,AppDate,ConDate
            this.setState({
                check: true
            })
            this.props.adddata(dataadd)
            setTimeout(() => {
                this.setState({
                    check: false,
                    Pname: '',
                    Page: '',
                    Pnumber: '',
                    Pdesaess: '',
                    Tarcking: '',
                    AppDate: '',
                    ConDate: ''
                }), alert('Paitent Data Added'), this.props.navigation.goBack()

            }, 100);

            // this.props.GetData()
        }
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
                    <Text style={styles.welcome}>Please Enter Your Paitent Detail`s</Text>
                    <Item style={styles.text}>
                        <Icon active name='person' style={{ fontSize: 30, color: 'green', left: 10 }} />
                        <Input placeholder='Paitent Name' onChangeText={(Pname) => this.setState({ Pname })}
                            keyboardType='default'

                            value={this.state.Pname} />
                    </Item>
                    <Item style={styles.text}>
                        <Icon active name='md-information-circle' style={{ fontSize: 30, color: 'green', left: 10 }} />
                        <Input placeholder='Age' onChangeText={(Page) => this.setState({ Page })}
                            keyboardType='numeric'

                            value={this.state.Page} />
                    </Item>
                    <Item style={styles.text}>
                        <Icon active name='ios-medkit' style={{ fontSize: 30, color: 'green', left: 10 }} />
                        <Input placeholder='Diseases' onChangeText={(Pdesaess) => this.setState({ Pdesaess })}
                            keyboardType='default'

                            value={this.state.Pdesaess} />
                    </Item>
                    <Item style={styles.text}>
                        <Icon active name='ios-phone-portrait' style={{ fontSize: 30, color: 'green', left: 10 }} />
                        <Input placeholder='Phone Number'
                            keyboardType='numeric'

                            onChangeText={(Pnumber) => this.setState({ Pnumber })}
                            value={this.state.Pnumber} />
                    </Item>
                    <Item style={styles.text}>
                        <Icon active name='md-calendar' style={{ fontSize: 30, color: 'green', left: 10 }} />
                        <Input placeholder=' Appiontment Date' onChangeText={(ConDate) => this.setState({ ConDate })}
                            value={this.state.ConDate} onFocus={this._showDateTimePicker} />
                    </Item>
                    <Item style={styles.text}>
                        <Icon active name='md-calendar' style={{ fontSize: 30, color: 'green', left: 10 }} />
                        <Input placeholder='Confromation Date' onChangeText={(AppDate) => this.setState({ AppDate })}
                            value={this.state.AppDate} disabled />
                    </Item>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker} />

                    <Item style={styles.text}>
                        <Icon active name='md-locate' style={{ fontSize: 30, color: 'green', left: 10 }} />
                        <Input placeholder='Tarcking Id' onChangeText={(Tarcking) => this.setState({ Tarcking })}
                            value={this.state.Tarcking} disabled />
                    </Item>

                    <Text></Text>
                    {this.state.check ? <Spinner color='green' /> :
                        <Button title="   Add Paitent Detail   " onPress={() => this.Paitent()} backgroundColor={'green'} style={{ fontSize: 40, color: 'green', left: 10 }} />
                    }<Text></Text>
                    <Text></Text>

                    <Button title="   GO Back   " onPress={() => this.props.navigation.goBack()} backgroundColor={'green'} style={{ fontSize: 40, color: 'green', left: 10 }} />

                </View>

                {/* {console.log(moment().format('MMMM Do YYYY'))}
                {console.log(moment().format('Dhmmss'))} */}

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
        adddata: (dataadd) => dispatch(Middilework.adddata(dataadd)),
        GetData: () => dispatch(Middilework.GetData()),

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPaitent);