import React, { Component } from 'react';
import {View,Text,Image,Keyboard,Dimensions} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title,Content,Form,Item,Label,Input, Footer} from 'native-base';
import Modal from 'antd-mobile/lib/modal';

const Alert = Modal.alert;
const screen = Dimensions.get('screen');

export default class App extends Component {

    cekAkun = () => {
        // this.props.navigation.navigate('FormNoTlp');
        // alert('coba')
        Keyboard.dismiss();
        Alert('Login', 'checking ..', [
            { text: 'Cancel', onPress: () => console.log('cancel') },
            { text: 'Ok', onPress: () => this.props.navigation.navigate('FormNoTlp') },
        ])
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
                        <Image source={require('../assets/ic_launcher.png')} style={{width:45,height:45}}/>
                    </Body>
                    <Right>
                        <Button transparent
                            onPress={()=>this.cekAkun()}>
                            <Icon name='arrow-forward' style={{color: '#2d4262'}}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={{backgroundColor:'#f1f1f2'}}>
                    <View>
                        <Form>
                            <Item floatingLabel>
                                <Label>Email Anda</Label>
                                <Input keyboardType='email-address' autoFocus={true}/>
                            </Item>
                            
                        </Form>
                    </View>
                </Content>
                <View 
                    style={{backgroundColor:'rgba(45, 66, 98, 1)',width:screen.width,height:30,alignItems:'center'}}>
                    <Text style={{color:'#fff',fontSize:20}}> Login</Text>
                </View>
            </Container>
        );
    }
}