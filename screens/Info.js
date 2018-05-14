import React, { Component } from 'react';
import {View,Text,Image} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, 
        Title,Content,List,ListItem, Toast} from 'native-base';

export default class App extends Component {
    render() {
        return(
            <Container>
                <Header iosBarStyle='dark-content' style={{backgroundColor:'#f1f1f2',borderBottomColor:'#2d4262'}}>
                <Left>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../assets/ic_launcher.png')} style={{width:40,height:40}}/>
                            <Text style={{color:'#000',fontSize:20,marginLeft:7}}> Info </Text>
                        </View>
                    </Left>
                </Header>
                <Content style={{backgroundColor:'#f1f1f2', padding:10}}>
                    <List>
                        <ListItem onPress={()=> Toast.show({
                                                text: 'pressed',
                                            })}>
                            <Body><Text>Kebijakan Privasi</Text></Body>
                            <Right>
                                <Icon name="arrow-forward" style={{color:'#2d4262'}}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body><Text>Pertanyaan sering ditanyakan</Text></Body>
                            <Right>
                                <Icon name="arrow-forward" style={{color:'#2d4262'}}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body><Text>Kritik & Saran</Text></Body>
                            <Right>
                                <Icon name="arrow-forward" style={{color:'#2d4262'}}/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}