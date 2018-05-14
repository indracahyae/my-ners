import React from 'react';
import {createStackNavigator,TabRouter,createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaIcons from 'react-native-vector-icons/MaterialIcons';

// screens
import Login from '../screens/Login';
import LoginForm from '../screens/LoginForm';
import FormNoTlp from '../screens/FormNoTlp';
import SyaratKetentuan from '../screens/SyaratKetentuan';
import Pesanan from '../screens/Pesanan';
import Saldo from '../screens/Saldo';
import Info from '../screens/Info';
import MyAccount from '../screens/MyAccount';
import KebijakanPrivasi from '../screens/KebijakanPrivasi';

const InfoStack = createStackNavigator({
    Info: {
        screen: Info,
        navigationOptions: {
            header: null
        },
    },
    KebijakanPrivasi: {
        screen: KebijakanPrivasi,
        navigationOptions: {
            header: null
        },
    },
    // next page in main app
});

const TabNav = createBottomTabNavigator(
{
    Home: {
        screen: Pesanan,
        path: '/',
        
    },
    Saldo: {
        screen: Saldo,
        path: '/saldo',
        
    },
    Info: {
        screen: InfoStack,
        path: '/info',
        
    },
    Akun: {
        screen: MyAccount,
        path: '/akun',
        
    },
},
{
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = `ios-home${focused ? '' : '-outline'}`;
            } else if (routeName === 'Saldo') {
                iconName = `ios-cash${focused ? '' : '-outline'}`;
            } else if (routeName === 'Info') {
                iconName = `ios-help-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Akun') {
                iconName = `person${focused ? '' : '-outline'}`;
                return <MaIcons name={iconName} size={27} color={tintColor} />;
            }
            // You can return any component that you like here! We usually use an  
            return <Ionicons name={iconName} size={27} color={tintColor} />;
        },
    }),
    tabBarOptions:{
        showLabel: false,
        activeTintColor: '#2d4262',
        style:{
            borderTopColor:'#2d4262'
        }
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
}
);


const TabRouteMain = createStackNavigator({
    Root: {
        screen: TabNav,
        navigationOptions: {
            header: null
        },
    },
    // next page in main app
});

// root (stackNavigator) 
// login Chooise > loginForm > form input no telp > form kode validasi > syarat ketentuan > dashboard 
export const Root = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        },
    },
    LoginForm: {
        screen: LoginForm,
        navigationOptions: ({ d }) => ({
            header: null,
        }),
    },
    FormNoTlp: {
        screen: FormNoTlp,
        navigationOptions: ({ d }) => ({
            header: null,
        }),
    },
    SyaratKetentuan: {
        screen: SyaratKetentuan,
        navigationOptions: ({ d }) => ({
        header: null,
        }),
    },
    Dashboard: { 
        screen: TabRouteMain,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        },
    },
}, {
    mode: 'card',
    headerMode: 'float',
});