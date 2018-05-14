import React, { Component } from 'react';
import {View,Text,Image} from 'react-native';
import {Container,Header,Left,Body,Right,Button,Icon,
        Title,Content,List,ListItem,Thumbnail,Toast} from 'native-base';

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
                <List>
                    <ListItem itemDivider style={{backgroundColor:'#e4e4e6'}}>
                        <Body><Text>Profil</Text></Body>
                        <Right>
                            <Icon name="pencil" style={{color: '#2d4262'}} type='FontAwesome'
                                    onPress={()=>Toast.show({
                                            text: 'pressed',
                                        })}/>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail style={{marginBottom:10}}>
                        <Thumbnail square size={80} source={{ uri: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg' }} />
                        <Body>
                            <Text style={{fontWeight:'bold'}}>Indra Cahya E</Text>
                            <Text note>indracahyae@gmail.com</Text>
                            <Text note>+6281335630404</Text>
                        </Body>
                        
                    </ListItem>
                    <View>
                        <ListItem itemDivider style={{backgroundColor:'#e4e4e6'}}>
                            <Body><Text>Daftar Anggota</Text></Body>
                            <Right>
                                <Icon name="add" style={{color: '#2d4262',fontSize:30}}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>andi xxx</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Ryan xxx</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Ronaldo xxx</Text>
                        </ListItem>
                    </View>
                </List>
                </Content>
            </Container>
        );
    }
}