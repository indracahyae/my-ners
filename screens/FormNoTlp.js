import React, { Component } from 'react';
import {View,Text,Image,ScrollView,Dimensions} from 'react-native';
import {Container,Header,Left,Body,Right,Button,Icon,
        Title,Content,Form,Item,Label,Input,Toast} from 'native-base';
import Modal from 'antd-mobile/lib/modal';
import List from 'antd-mobile/lib/list';
import SearchBar from 'antd-mobile/lib/search-bar'
import {PhoneRegion} from '../stuff/PhoneRegion';
import firebase from 'react-native-firebase';

const ListItem = List.Item;
const screen = Dimensions.get('screen');

export default class App extends Component {
    constructor(){
        super();
        this.state={
            modalPhoneRegion: false,
            formValidasi : 'none',
            resultPhoneRegion: [],
            phone:'+62',
            codeInput: ''
        }
        this.inputs={};
    }

    componentDidMount(){
        console.log(this.inputs['phone']);
        
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
          e.preventDefault();
        }
      }

    searchPhoneRegion = (k) =>{
        let result='';
        if(k != ''){
            result = PhoneRegion.filter(data => data.name.match(k));
        }else{
            result =[];
        }
        this.setState({
            resultPhoneRegion: result
        });
    }

    selectPhoneRegion = (k) => {
        this.setState({
            phone: k, modalPhoneRegion: false, resultPhoneRegion: []
        });
    }

    sendVerification = () => {
        firebase.auth().signInWithPhoneNumber(this.state.phone)
          .then(confirmResult => this.setState({ confirmResult, formValidasi: 'flex' }))
          .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
    }

    confirmCode = () => {
        const { codeInput, confirmResult } = this.state;

        if (confirmResult && codeInput.length) {
            confirmResult.confirm(codeInput)
            .then((user) => {
                this.props.navigation.navigate('SyaratKetentuan');
            })
            .catch(error => {
                this.setState({ message: `Code Confirm Error: ${error.message}` });
                Toast.show({
                    text: "kode tidak sesuai",
                    duration: 2000
                });
            });
        }
    };
    

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
                        
                    </Right>
                </Header>
                <Content style={{backgroundColor:'#f1f1f2', padding:10}}>
                    <View>
                        <Text>
                            Masukkan Nomor Handphone untuk validasi akun anda
                        </Text>
                        <Form>
                            <Item>
                                <Icon active name='arrow-dropdown' 
                                    onPress={()=>{
                                        this.setState({
                                            modalPhoneRegion: true
                                        })
                                    }} />
                                <Input
                                    keyboardType='phone-pad' value={this.state.phone}
                                    onChangeText={(v)=>{
                                        this.setState({phone:v});
                                        }}/>
                                <Icon style={{color:'#636e72'}} 
                                    active name='arrow-dropright-circle' onPress={()=>this.sendVerification()}/>
                            </Item>
                        </Form>
                        <Modal
                            visible={this.state.modalPhoneRegion}
                            transparent
                            maskClosable={true}
                            onClose={()=>{this.setState({modalPhoneRegion: false,resultPhoneRegion:[]})}}
                            title="Phone Region"
                            footer={null}
                            wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                            >
                            <List renderHeader={()=>{''}} className="my-list" style={{height:397,marginTop:10}}>
                                <SearchBar placeholder="Search" maxLength={17} onChange={(k)=>this.searchPhoneRegion(k)} 
                                    cancelText='cancel'
                                    onCancel={()=>this.setState({modalPhoneRegion: false,resultPhoneRegion:[]})}/>
                                <ScrollView>
                                    {
                                        this.state.resultPhoneRegion.map((e,i)=>{
                                            return (
                                                <ListItem 
                                                    extra={e.name} key={i}
                                                    onClick={()=>this.selectPhoneRegion(e.dial_code)}>{e.dial_code}</ListItem>)
                                        })
                                    }
                                </ScrollView>
                            </List>
                               
                        </Modal>
                    </View>
                    <View style={{display:this.state.formValidasi, marginTop:20}}>
                        <Text onPress={()=>this.props.navigation.navigate('SyaratKetentuan')}>
                            Kode telah dikirim di handphone Anda, masukkan kode disini. 
                        </Text>
                        <Form>
                            <Item>
                                <Input placeholder='kode verifikasi' keyboardType='numeric' value={this.state.codeInput}
                                    onChangeText={(v)=>{
                                        this.setState({codeInput:v});
                                    }}
                                />
                                <Icon style={{color:'#636e72'}} 
                                    active name='arrow-dropright-circle' onPress={()=>this.confirmCode()}/>
                            </Item>
                        </Form>
                    </View>
                </Content>
                <View 
                    style={{backgroundColor:'rgba(45, 66, 98, 1)',width:screen.width,height:45,alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{color:'#fff',fontSize:20}}>Validasi Akun</Text>
                </View>
            </Container>
        );
    }
}