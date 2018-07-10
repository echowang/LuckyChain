import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import TabBarItem from '../widget/TabBarItem'

type Props = {};
export default class NearbyScene extends Component<Props>{
    static navigationOptions = {
        tabBarLabel: '大厅',
        tabBarIcon: ({focused, tintColor}) => (
            <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('../img/tabbar/tabbar_merchant.png')}
                selectedImage={require('../img/tabbar/tabbar_merchant_selected.png')}
            />
        )
    };

    constructor(){
        super()
    }

    render(){
        return (<View style={styles.container}>
            <Text style={styles.text}>NearbyScene</Text>
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
