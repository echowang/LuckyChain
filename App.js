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

import color from './src/widget/color'
import TabBarItem from './src/widget/TabBarItem'

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
        navigationOptions: {
            tabBarLabel: '团购',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./src/img/tabbar/tabbar_homepage.png')}
                    selectedImage={require('./src/img/tabbar/tabbar_homepage_selected.png')}
                />
            )
        },
    },
    Nearby: {
        screen: NearbyScene,
        navigationOptions: {
            tabBarLabel: '附近',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./src/img/tabbar/tabbar_merchant.png')}
                    selectedImage={require('./src/img/tabbar/tabbar_merchant_selected.png')}
                />
            )
        },
    },

    Order: {
        screen: OrderScene,
        navigationOptions: {
            tabBarLabel: '订单',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./src/img/tabbar/tabbar_order.png')}
                    selectedImage={require('./src/img/tabbar/tabbar_order_selected.png')}
                />
            )
        },
    },

    Mine: {
        screen: MineScene,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./src/img/tabbar/tabbar_mine.png')}
                    selectedImage={require('./src/img/tabbar/tabbar_mine_selected.png')}
                />
            )
        },
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
    {
      navigationOptions: {
          title:"LuckyChain",
          headerStyle: { backgroundColor: color.primary},
          headerBackTitle: null,
          headerTintColor: '#333333',
          showIcon: true
      },
    })