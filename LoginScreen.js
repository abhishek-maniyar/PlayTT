import React, { Component } from 'react';
import { Alert, Button, TextInput, View } from 'react-native';

const signIn = () => {
    Alert.alert('SignIn button has been pressed!');
};

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {username:''};
    }
    
    render() {
        return (
                <View style={{padding: 10}}>
                <TextInput
                style={{height: 40, marginTop:200, textAlign:'center'}}
                placeholder="Enter your name !"
                onChangeText={(username) => this.setState({username})}
                />
                
                <Button
                onPress={signIn}
                title="Sign In"
                color="#841584"
                accessibilityLabel="Sign in to continue..."
                disabled={!this.state.username}
                />
                </View>
                );
    }
}
