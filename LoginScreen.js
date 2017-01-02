import React, { Component } from 'react';
import {
  Alert,
  Button,
  TextInput,
  View,
  Navigator,
  Image
 } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {userName:''};
    }

    render() {

        return (
          <View style={{flex: 1, padding: 10, backgroundColor:'#ac7139'}}>
          <TextInput
          style={{height: 40, marginTop:170, marginBottom:10,textAlign:'center'}}
          placeholder="Enter your name !"
          onChangeText={(userName) => this.setState({userName})}
          />
          <Button
          onPress={(e) => this.signIn(e)}
          title="Sign In"
          color="blue"
          accessibilityLabel="Sign in to continue..."
          disabled={!this.state.userName}
          autoCorrect='false'
          />
          <Image source={require('./img/TableTennis.png')} style={{alignSelf: 'center', marginTop:85, width: 300, height: 300, resizeMode:'cover'}} />
          </View>
          );
    }

    signIn() {
        Actions.HomeScreen({text: 'Home'});
    };


}
