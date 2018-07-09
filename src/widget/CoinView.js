/**
 * Created by dannywang on 2018/7/9.
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
    coin:Double,
    coinDesc:String,
    coinUnit:String
}

export default class CoinView extends Component<Props>{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.coinText}>{this.props.coin}</Text>
                <Text style={styles.descText}>{this.props.coinDesc}</Text>
                <Text style={styles.unitText}>{this.props.coinUnit}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10
    },
    coinText:{
        fontSize: 20,
        textAlign: 'center',
        color:'#333333',
    },
    descText:{
        fontSize: 14,
        textAlign: 'center',
        color:'#333333',
        marginTop:4
    },
    unitText:{
        fontSize: 14,
        textAlign: 'center',
        color:'#444444',
        marginTop:4
    }
})
