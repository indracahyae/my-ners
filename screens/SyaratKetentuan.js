import React, { Component } from 'react';
import {View,Text,Image,Alert} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title,Content, Subtitle} from 'native-base';

export default class App extends Component {

    konfirm =()=>{
        Alert.alert(
            '',
            'Dengan menutup dialog ini, saya telah membaca dan mematuhi syarat dan ketentuan yang berlaku',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
              {text: 'Setuju', onPress: () => this.props.navigation.navigate('Dashboard')},
            ],
            { cancelable: false }
          )
    }

    render() {
        return(
            <Container>
                <Header iosBarStyle='dark-content' style={{backgroundColor:'#f1f1f2',borderBottomColor:'#2d4262'}}>
                <Left>
                    <Button transparent
                        onPress={()=>this.props.navigation.goBack()}
                    >
                        <Icon name='arrow-back' style={{color: '#2d4262'}}/>
                    </Button>
                </Left>
                <Body>
                    <Image source={require('../assets/ic_launcher.png')} style={{width:32,height:32}}/>
                    <Subtitle style={{color:'#000'}}>Syarat Ketentuan</Subtitle>
                </Body>
                <Right>
                    <Button transparent
                        onPress={()=>this.konfirm()}
                    >
                        <Icon name='arrow-forward' style={{color: '#2d4262'}}/>
                    </Button>
                </Right>
                </Header>
                <Content style={{backgroundColor:'#f1f1f2', padding:10}}>
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