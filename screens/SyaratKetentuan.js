import React, { Component } from 'react';
import {View,Text,Image} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title,Content, Subtitle} from 'native-base';

export default class App extends Component {
    render() {
        return(
            <Container>
                <Header iosBarStyle='light-content' style={{backgroundColor:'#2d4262'}}>
                <Left>
                    <Button transparent
                        onPress={()=>this.props.navigation.goBack()}
                    >
                        <Icon name='arrow-back' style={{color: '#D09683'}}/>
                    </Button>
                </Left>
                <Body>
                    <Image source={require('../assets/ic_launcher.png')} style={{width:32,height:32}}/>
                    <Subtitle style={{color:'#fff'}}>Syarat Ketentuan</Subtitle>
                </Body>
                <Right>
                    <Button transparent
                        onPress={()=>this.props.navigation.navigate('Dashboard')}
                    >
                        <Icon name='arrow-forward' style={{color: '#D09683'}}/>
                    </Button>
                </Right>
                </Header>
                <Content>
                    <View>
                        <Text>
                            Syarat Ketentuan
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }
}