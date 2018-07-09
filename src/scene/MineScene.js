import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class MineScene extends Component<Props>{
    constructor(){
        super()
    }

    render(){
        return (<View>
            <Text style={{fontSize:20}}>MineScene</Text>
        </View>);
    }
}