import React, { Component } from 'react';
import {View,Text,Image} from 'react-native';
import {Container,Header,Left,Body,Right,Button,
    Icon,Title,Content,List,ListItem} from 'native-base';
import Modal from 'antd-mobile/lib/modal';

const operation = Modal.operation;

export default class App extends Component {

    filterRiwayatPesanan = () => {
        operation([
            { text: 'Dalam Proses', onPress: () => console.log('1') },
            { text: 'Selesai', onPress: () => console.log('2') },
          ])
    }

    render() {
        return(
            <Container>
                <Header iosBarStyle='dark-content' style={{backgroundColor:'#f1f1f2',borderBottomColor:'#2d4262'}}>
                    <Left>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../assets/ic_launcher.png')} style={{width:40,height:40}}/>
                            <Text style={{color:'#000',fontSize:20,marginLeft:7}}> Pesanan </Text>
                        </View>
                    </Left>
                    <Right>
                        <Icon name='add' style={{color: '#2d4262'}} type="MaterialIcons"
                            onPress={()=>{}}/>
                    </Right>
                </Header>
                <Content style={{backgroundColor:'#f1f1f2', padding:10}} >
                    <List>
                        <ListItem itemDivider style={{backgroundColor:'#e4e4e6'}} icon>
                            <Body style={{borderBottomWidth:null}}><Text>Riwayat Pesanan</Text></Body>
                            <Right style={{borderBottomWidth:null}}>
                                <Text>Dalam Proses</Text>
                                <Icon name="filter-list" type="MaterialIcons" style={{color: '#2d4262'}} onPress={()=>this.filterRiwayatPesanan()}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>xxxxx</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}