import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, FlatList,Image,Text} from 'react-native';

import screen from '../comment/screen'
import color from '../comment/color'

import NavigationItem from '../widget/NavigationItem'
import TabBarItem from '../widget/TabBarItem'
import ListItemView from '../widget/ListItemView';

type Props = {

}

type State = {

}
export default class HomeScene extends Component<Props,State>{
    static navigationOptions = {
        headerTitle: '首页',//对页面的配置
        headerTintColor: '#333333',
        showIcon: true,
        tabBarLabel: '首页',
        headerStyle: { backgroundColor: color.primary },
        tabBarIcon: ({focused, tintColor}) => (
            <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('../img/tabbar/tabbar_homepage.png')}
                selectedImage={require('../img/tabbar/tabbar_homepage_selected.png')}
            />
        )
    };

    constructor(Props){
        super(Props)
    }

    render(){
        return (<FlatList
            data={[{id:'1', icon: require('../img/mine/icon_mine_member.png'),itemTile:'我的钱包'}, {id:'2',icon: require('../img/mine/icon_mine_balance.png'),itemTile:'我的投注'}]}
            renderItem={this._listItem}
            keyExtractor={this._keyExtractor}
        />);
    }

    _listItem = ({item}) => (<ListItemView icon={item.icon} title={item.itemTile}/>);
    _keyExtractor = (item, index) => item.id;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    listItemStyle: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor:'#333333',
        color:'#ffffff',
        margin: 10,
    },
    searchBar: {
        width: screen.width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
});
