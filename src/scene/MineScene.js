import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import CoinView from '../widget/CoinView'
import ListItemView from '../widget/ListItemView'

type Props = {};
export default class MineScene extends Component<Props>{
    constructor(){
        super()
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.coinContainer}>
                    <CoinView coin="5.24" coinDesc="总资产" coinUnit="BTC"/>
                    <CoinView coin="7.24" coinDesc="邀请佣金" coinUnit="LPT"/>
                    <CoinView coin="5.24" coinDesc="LPT分红" coinUnit="BTC"/>
                    <CoinView coin="5.24" coinDesc="挖矿奖励" coinUnit="BTC"/>
                </View>
                <View style={styles.listContainer}>
                    <ListItemView icon={require('../img/mine/icon_mine_member.png')} title="我的钱包"/>
                    <ListItemView icon={require('../img/mine/icon_mine_balance.png')} title="我的投注"/>
                    <ListItemView icon={require('../img/mine/icon_mine_friends.png')} title="我的邀请"/>
                    <ListItemView icon={require('../img/mine/icon_mine_customerService.png')} title="关于我们"/>
                    <ListItemView icon={require('../img/mine/icon_mine_aboutmeituan.png')} title="问题反馈"/>
                </View>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    coinContainer: {
        justifyContent: 'center',
        flexDirection:'row',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    listContainer: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    }
});