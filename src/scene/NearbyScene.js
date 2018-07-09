import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class NearbyScene extends Component<Props>{
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
