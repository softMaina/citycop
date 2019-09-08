import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen';
import CrimeScreen from '../screens/CrimeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import drawerContentComponents from '../components/DrawerComponent';

const Home = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);
const Crime = createStackNavigator(
  {
    Crime: CrimeScreen,
  },
  {
    initialRouteName: 'Crime',
    headerMode: 'none',
  },
);
const Login = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const Profile = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none',
  },
);
const Settings = createStackNavigator(
  {
    Settings: SettingScreen,
  },
  {
    initialRouteName: 'Settings',
    headerMode: 'none',
  },
);

const SignedIn = createDrawerNavigator(
  {
    Home: Home,
    Crime: Crime,
    Settings: Settings,
    Profile: Profile,
  },
  {
    initialRouteName: 'Home',
    contentComponent: drawerContentComponents,
  },
);

export default createAppContainer(SignedIn);
