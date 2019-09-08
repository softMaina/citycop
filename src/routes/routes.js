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
    HomeScreen: {
      screens: HomeScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);
const Crime = createStackNavigator(
  {
    CrimeScreen: {
      screens: CrimeScreen,
    },
  },
  {
    initialRouteName: 'Crime',
    headerMode: 'none',
  },
);
const Login = createStackNavigator(
  {
    LoginScreen: {
      screens: LoginScreen,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const Profile = createStackNavigator(
  {
    ProfileScreen: {
      screens: ProfileScreen,
    },
  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none',
  },
);
const Settings = createStackNavigator(
  {
    SettingScreen: {
      screens: SettingScreen,
    },
  },
  {
    initialRouteName: 'Setting',
    headerMode: 'none',
  },
);

const SignedIn = createDrawerNavigator(
  {
    Home: Home,
    Crimes: Crime,
    Settings: Settings,
    Account: Profile,
  },
  {
    initialRouteName: 'Home',
    contentComponent: drawerContentComponents,
  },
);

export const AppContainerSignedIn = createAppContainer(SignedIn);
