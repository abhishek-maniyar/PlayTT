/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator
} from 'react-native';

import LoginScreen from './LoginScreen';

export default class PlayTT extends Component {
  render() {
    return (
            <Navigator
            initialRoute={{ title: 'Login Screen', index: 0 }}
            renderScene={(route, navigator) => {
            return <LoginScreen />
            }}
            />
            
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

AppRegistry.registerComponent('PlayTT', () => PlayTT);
