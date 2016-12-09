import React, { Component } from 'react';
import { Text,
	View,
	Alert
		} from 'react-native';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<View style={{padding: 10, marginTop:30}}>
			<Text> Welcome home {this.props.userName}!</Text>
			</View>
			);
		}
	}
