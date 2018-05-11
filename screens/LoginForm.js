import React, { Component } from 'react';
import {View,Text,Image} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title,Content,Form,Item,Label,Input, Footer} from 'native-base';
import Modal from 'antd-mobile/lib/modal';

const Alert = Modal.alert;

export default class App extends Component {

    cekAkun = () => {
        // this.props.navigation.navigate('FormNoTlp');
        // alert('coba')
        Alert('Login', 'checking ..', [
            { text: 'Cancel', onPress: () => console.log('cancel') },
            { text: 'Ok', onPress: () => this.props.navigation.navigate('FormNoTlp') },
        ])
    }

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
                        <Image source={require('../assets/ic_launcher.png')} style={{width:45,height:45}}/>
                    </Body>
                    <Right>
                        <Button transparent
                            onPress={()=>this.cekAkun()}>
                            <Text style={{marginRight:5,color:'#f1f1f2',fontSize:18}}>Login</Text>
                            <Icon name='arrow-forward' style={{color: '#D09683'}}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={{backgroundColor:'#f1f1f2'}}>
                    <View>
                        <Form>
                            <Item floatingLabel>
                                <Label>Email Anda</Label>
                                <Input />
                            </Item>
                            
                        </Form>
                    </View>
                </Content>

            </Container>
        );
    }
}