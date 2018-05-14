import React, { Component } from 'react';
import {View,Text,Image} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title,Content} from 'native-base';

export default class App extends Component {
    render() {
        return(
            <Container>
                <Header iosBarStyle='dark-content' style={{backgroundColor:'#f1f1f2',borderBottomColor:'#2d4262'}}>
                    <Left>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../assets/ic_launcher.png')} style={{width:40,height:40}}/>
                            <Text style={{color:'#000',fontSize:20,marginLeft:7}}> Akun </Text>
                        </View>
                    </Left>
                    <Right>
                        <Icon name='sign-out' style={{color: '#2d4262',fontSize:25}} type='FontAwesome'
                            onPress={()=>this.props.navigation.navigate('Login')}/>
                    </Right>
                </Header>
                <Content style={{backgroundColor:'#f1f1f2', padding:10}}>
                    <View>
                        <Text>
                            Akun
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }
}