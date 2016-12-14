import React, { Component } from 'react';

import {
	Text,
	View,
	ListView,
	StyleSheet,
	} from 'react-native';

import Row from './MatchInfoRow';

const styles = StyleSheet.create({
	container: {
  	flex: 1,
  	marginTop: 20,
	},
	separator: {
	 flex: 1,
	 height: StyleSheet.hairlineWidth,
	 backgroundColor: '#8E8E8E',
 },
});

var Firebase = require('firebase');

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);

		var myFirebaseRef = new Firebase("https://playtt-a1803.firebaseio.com/");
		this.itemsRef = myFirebaseRef.child('MatchInfo');

		this.state = {
    	matchInfoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
  	};

  	this.items = [];
	}

	componentDidMount() {
	  // When something is added
	  this.itemsRef.on('child_added', (dataSnapshot) => {
	    this.items.push({id: dataSnapshot.key(), text: dataSnapshot.val()});
			this.setState({
	      matchInfoSource: this.state.matchInfoSource.cloneWithRows(this.items)
	    });
	  });

	  // When something is removed
	  this.itemsRef.on('child_removed', (dataSnapshot) => {
	      this.items = this.items.filter((x) => x.id !== dataSnapshot.key());
	      this.setState({
	        matchInfoSource: this.state.matchInfoSource.cloneWithRows(this.items)
	      });
	  });
	}

	render() {
		return (
			<ListView
        style={styles.container}
        dataSource={this.state.matchInfoSource}
        renderRow={this.renderRow.bind(this)}
				renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
			);
	}

	renderRow(rowData) {
		return (
			<Row {...rowData} />
		);
	}
}
