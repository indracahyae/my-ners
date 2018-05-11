// import React, { Component } from 'react';
// import {View,Text} from 'react-native';
// import {TabRouter} from 'react-navigation';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

// import {TabRoute} from '../stuff/Router';

// // tab content
// class TabContent extends Component {
//     constructor(props, context) {
//         super(props, context);
//         this.state = {
//             active: props.value.active,
//         };
//     }

//     //this method will not get called first time
//     componentWillReceiveProps(newProps){
//         this.setState({
//             active: newProps.value.active,
//         }); 
//     }

//     render() {
//         const Component = TabRoute.getComponentForRouteName(this.state.active);
//         return <Component/>;
//     }
// }  

// export default class App extends Component {
//     constructor(props, context) {
//         super(props, context);
        
//         this.state = {
//           active: 'Pesanan',
//         };
//       }

//     render() {
//         return(
//             <Container>
//                 <Content>
//                     <TabContent value={this.state} key={this.state}/>
//                 </Content>
//                 <Footer>
//                 <FooterTab>
//                     <Button active={this.state.active === 'Pesanan'}
//                         onPress={() => {
//                             this.setState({ active: 'Pesanan' });
//                         }}>
//                         <Icon active={this.state.active === 'Pesanan'} name="home" />
//                     </Button>
//                     <Button 
//                         active={this.state.active === 'Saldo'}
//                         onPress={() => {
//                             this.setState({ active: 'Saldo' });
//                         }}>
//                         <Icon active={this.state.active === 'Saldo'} name="cash" />
//                     </Button>
//                     <Button
//                         active={this.state.active === 'Info'} 
//                         onPress={() => {
//                             this.setState({ active: 'Info' });
//                         }}>
//                         <Icon active={this.state.active === 'Info'} name="help-circle" />
//                     </Button>
//                     <Button 
//                         active={this.state.active === 'MyAccount'}
//                         onPress={() => {
//                             this.setState({ active: 'MyAccount' });
//                         }}>
//                         <Icon active={this.state.active === 'MyAccount'} name="person" type='MaterialIcons'/>
//                     </Button>
//                 </FooterTab>
//                 </Footer>
//             </Container>
            
//         );
//     }
// }