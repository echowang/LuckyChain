/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {StatusBar} from 'react-native'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'

import color from './src/comment/color'

import HomeScene from './src/scene/HomeScene'
import NearbyScene from './src/scene/NearbyScene'
import OrderScene from './src/scene/OrderScene'
import MineScene from './src/scene/MineScene'

type Props = {};
export default class App extends Component<Props> {
  constructor(Props){
    super(Props)
      StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <Navigator />
    );
  }
}



const Tab = createBottomTabNavigator({
    Home: {
        screen: HomeScene,
    },
    Nearby: {
        screen: NearbyScene,
    },

    Order: {
        screen: OrderScene,
    },

    Mine: {
        screen: MineScene,
    },
},{
        lazy: true,
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: color.primary,
            inactiveTintColor: color.gray,
            style: {backgroundColor: '#ffffff'},
    },
})

const Navigator = createStackNavigator(
    {
        Tab: {screen: Tab},
    },
)