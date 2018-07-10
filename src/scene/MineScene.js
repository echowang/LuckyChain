import React, {Component} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import CoinView from '../widget/CoinView'
import ListItemView from '../widget/ListItemView'
import TabBarItem from '../widget/TabBarItem'

import Config from '../comment/config'

type Props = {};
export default class MineScene extends Component<Props>{
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({focused, tintColor}) => (
            <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../img/tabbar/tabbar_mine.png')}
            selectedImage={require('../img/tabbar/tabbar_mine_selected.png')}
            />
        )
    };

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
                    <FlatList
                        data={Config.menuInfo}
                        renderItem={this._listItem}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
            </View>
            );
    }

    _listItem = ({item}) => (<ListItemView icon={item.icon} title={item.title}/>);
    _keyExtractor = (item, index) => item.id;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    coinContainer: {
        justifyContent: 'center',
        flexDirection:'row',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    listContainer: {
        flex: 1,
        backgroundColor: 'yellow',
    }
});