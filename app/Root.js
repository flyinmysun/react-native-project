/**
 * Created by Administrator on 2017/9/2.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';


export default class Root extends React.Component{
    static navigationOptions = {
        title: 'Welcome',
    };

    render(){
        return(
            <View style={{flex:1}}>
                <Text style={{flex:1,fontSize:30,alignSelf:"center",marginTop:30}}>Hello, Navigation!</Text>
                <TouchableOpacity style={{backgroundColor:"cyan",height:40,justifyContent:"center"}}>
                    <Text style={{alignSelf:"center"}}>点击我跳转下一个页面</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const SimpleApp = StackNavigator({
    Root: { screen: Root },
});