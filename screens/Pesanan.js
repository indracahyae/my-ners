import React, { Component } from 'react';
import {View,Text,Image} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title,Content} from 'native-base';

export default class App extends Component {
    render() {
        return(
            <Container>
                <Header iosBarStyle='light-content' style={{backgroundColor:'#2d4262'}}>
                    <Left>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../assets/ic_launcher.png')} style={{width:40,height:40}}/>
                            <Text style={{color:'#fff',fontSize:20,marginLeft:7}}> Pesanan </Text>
                        </View>
                    </Left>
                </Header>
                <Content>
                    <View>
                        <Text>
                            Pesanan
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }
}