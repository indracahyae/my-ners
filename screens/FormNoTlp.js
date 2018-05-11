import React, { Component } from 'react';
import {View,Text,Image} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title,Content} from 'native-base';

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
                    <Image source={require('../assets/ic_launcher.png')} style={{width:45,height:45}}/>
                </Body>
                <Right>
                    
                </Right>
                </Header>
                <Content>
                    <View>
                        <Text>
                            Form No tlp
                        </Text>
                    </View>
                    <View>
                        <Text onPress={()=>this.props.navigation.navigate('SyaratKetentuan')}>
                            Form Kode Validasi
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }
}