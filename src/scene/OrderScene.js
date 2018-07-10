import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import TabBarItem from '../widget/TabBarItem'

type Props = {};
export default class OrderScene extends Component<Props>{
    static navigationOptions = {
        tabBarLabel: '消息',
        tabBarIcon: ({focused, tintColor}) => (
            <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../img/tabbar/tabbar_order.png')}
            selectedImage={require('../img/tabbar/tabbar_order_selected.png')}
            />
        )
    };

    constructor(){
        super()
    }

    render(){
        return (<View style={styles.container}>
            <Text style={styles.text}>OrderScene</Text>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color:'#333333',
        margin: 10,
    }
});