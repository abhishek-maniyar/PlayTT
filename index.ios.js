/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';

 import {
 	AppRegistry,
  Navigator
 } from 'react-native';

 import LoginScreen from './LoginScreen';
 import HomeScreen from './Home';


 export default class PlayTT extends Component {
   render() {
    return (
      <Navigator
        initialRoute={{ id: 'Login'}}
        renderScene={ this.renderScene } />
      )
  }

  renderScene(route, navigator) {
     if(route.id == 'Login') {
       return <LoginScreen navigator={navigator} {...route.passProps} />
     }
     if(route.id == 'Home') {
       return <HomeScreen navigator={navigator} {...route.passProps} />
     }
  }
 }

 AppRegistry.registerComponent('PlayTT', () => PlayTT);
