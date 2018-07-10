/**
 * Created by dannywang on 2018/7/9.
 */

import React, {Component} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

type Props = {
    icon:any,
    title:String,
    arrow:any
}

export default class ListItemView extends Component<Props>{
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.icon}/>
                <Text style={styles.titleStyle}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        backgroundColor: 'yellow',
    },
    titleStyle:{
        fontSize: 20,
        textAlign: 'center',
        color:'#333333',
        padding:10
    }
})
