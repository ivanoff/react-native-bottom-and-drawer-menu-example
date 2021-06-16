import React, {Component} from 'react';
//import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';
//import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//import { DrawerActions } from 'react-navigation';
import {DrawerActions} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

import Home from '../screens/Home/index';
import About from '../screens/About/index';
import Contact from '../screens/Contact/index';
import DrawerScreen from '../screens/Common/DrawerScreen';

const Tabs = createMaterialTopTabNavigator(
  {
    //const Tabs = createBottomTabNavigator({
    Home: Home,
    About: About,
    Contact: Contact,
  },
  {
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#fff',
      },
      indicatorStyle: {
        backgroundColor: '#000',
      },
    },
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Tabs,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 300,
  },
);

const MenuImage = ({navigation}) => {
  if (!navigation.state.isDrawerOpen) {
    return <Image source={require('../images/menu-button.png')} />;
  } else {
    return <Image source={require('../images/left-arrow.png')} />;
  }
};

const StackNavigator = createStackNavigator(

    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.

    DrawerNavigator: {
      screen: DrawerNavigator,
    },
  },
  {
    navigationOptions: ({navigation}) => ({
      title: 'ReactNavigation', // Title to appear in status bar
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}>
          <MenuImage style="styles.bar" navigation={navigation} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
);

export default StackNavigator;
