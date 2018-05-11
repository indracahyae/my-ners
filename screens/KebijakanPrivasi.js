import React, { Component } from 'react';
import {View,Text} from 'react-native';

export default class App extends Component {
    render() {
        return(
            <View style={{marginTop:30}}>
                <Text
                    onPress={()=>{}}>
                    Kebijakan Privasi
                </Text>
            </View>
        );
    }
}