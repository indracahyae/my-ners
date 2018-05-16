import React, { Component } from 'react';
import {View,Text,StatusBar,ImageBackground,Dimensions,Image} from 'react-native';
import {Button,Content,Icon} from 'native-base';

const screen = Dimensions.get('screen');

export default class App extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <View>
                <ImageBackground 
                    source={require('../assets/bg_login_user.jpg')} 
                    style={{width: screen.width, height: screen.height,alignItems:'center',justifyContent:'center'}} 
                    resizeMode='contain' >
                    <View>
                        <StatusBar barStyle="dark-content" />
                    </View>
                    <Content>
                        <View style={{alignItems:'center',width:220}}>
                            <Image source={require('../assets/logo.png')} style={{marginTop:80,width:130,height:110}}/>
                            <View style={{marginTop:40}}>
                                <Button block light iconLeft
                                    style={{paddingLeft:10,paddingRight:10,marginBottom:20,borderRadius:0,width:219,alignContent:'flex-start',alignItems:'center',alignSelf:'flex-start',justifyContent:'flex-start'}}> 
                                    <Icon name='facebook' style={{color: '#2d4262',marginRight:7,marginLeft:3}} type='FontAwesome' />
                                    <Text>Continue using Facebook</Text> 
                                </Button>
                                <Button block light iconLeft
                                    onPress={()=>{}}
                                    style={{paddingLeft:10,paddingRight:10,marginBottom:20,borderRadius:0,width:219,alignContent:'flex-start',alignItems:'center',alignSelf:'flex-start',justifyContent:'flex-start'}}>
                                    <Icon name='twitter' style={{color: '#2d4262',marginRight:7,marginLeft:3,fontSize:22}} type='FontAwesome'/> 
                                    <Text>Continue using Twitter</Text> 
                                </Button>
                                <Button block light iconLeft
                                    style={{paddingLeft:10,paddingRight:10,marginBottom:20,borderRadius:0,width:219,alignContent:'flex-start',alignItems:'center',alignSelf:'flex-start',justifyContent:'flex-start'}}>
                                    <Icon name='google' style={{color: '#2d4262',marginRight:7,marginLeft:3,fontSize:20}} type='FontAwesome'/> 
                                    <Text>Continue using Google</Text> 
                                </Button>
                                <Button block light iconLeft
                                    style={{paddingLeft:10,paddingRight:10,marginBottom:20,borderRadius:0,width:219,alignContent:'flex-start',alignItems:'center',alignSelf:'flex-start',justifyContent:'flex-start'}}
                                    onPress={()=>this.props.navigation.navigate('LoginForm')}> 
                                    <Icon name='envelope' style={{color: '#2d4262',marginRight:7,marginLeft:3,fontSize:18}} type='FontAwesome'/>
                                    <Text>Continue using Email</Text> 
                                </Button>
                            </View>
                        </View>
                    </Content>
                    <View 
                        style={{backgroundColor:'rgba(255, 255, 255, 0.2)',width:screen.width,height:21,alignItems:'center'}}>
                        <Text style={{color:'#000'}}> By continuing, you agree to our team and privacy policy </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

{/* <Text 
    onPress={()=>this.props.navigation.navigate('LoginForm')}>
    Inside
</Text> */}