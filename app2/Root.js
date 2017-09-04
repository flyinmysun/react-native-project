/**
 * Created by Administrator on 2017/9/2.
 */
import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import { StackNavigator,TabNavigator } from 'react-navigation';
import WeChatScreen from "./WeChatScreen"
import ContactScreen from  "./ContactScreen"
import DiscoverScreen from  "./DiscoverScreen"
import MeScreen from  "./MeScreen"
import LoginScreen from "./LoginScreen"

export default class Root extends React.Component{
    render(){
        return(
            <App></App>
        )
    }

}
const MainScreen = TabNavigator({
    WeChat:{
        screen:WeChatScreen,
        navigationOptions:{
            tabBarLabel: '微信',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require("./imgs/msg.png")}
                    style={{tintColor: tintColor,width:24,height:24}}
                />
            ),
        },
    },
    Contacts:{
        screen:ContactScreen,
        navigationOptions:{
            tabBarLabel: '通讯录',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require("./imgs/contact.png")}
                    style={{tintColor: tintColor,width:24,height:24}}
                />
            ),
        },
    },
    discover:{
        screen:DiscoverScreen,
        navigationOptions:{
            tabBarLabel: '发现',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require("./imgs/discover.png")}
                    style={{tintColor: tintColor,width:24,height:24}}
                />
            ),
        },
    },
    Me:{
        screen:MeScreen,
        navigationOptions:{
            tabBarLabel: '我',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require("./imgs/me.png")}
                    style={{tintColor: tintColor,width:24,height:24}}
                />
            ),
        },
    }

},{
    //标签栏的位置，安卓默认在上面
    tabBarPosition: 'bottom',
    //标签栏几个页面的共同设置项
    tabBarOptions: {
        activeTintColor: 'green', //label和icon的前景色 活跃状态下（选中）
        inactiveTintColor:'#999', //label和icon的前景色 不活跃状态下(未选中)
        style:{backgroundColor:'#fff'},  //标签栏底部样式，默认背景色为蓝色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // 如TabBar下面显示有一条线，可以设高度为0后隐藏,
        labelStyle:{fontSize:10}
    },
})

const App = StackNavigator({
    login:{
        screen:LoginScreen,
        navigationOptions:{
            headerTitle:"登录",
            headerTitleStyle:{alignSelf:'center'},
            /*headerLeft:<Image
                source={require("./imgs/leftArrow.png")}
                style={{paddingLeft:5}}
            />,*/
            headerStyle:{backgroundColor:"#fafafa",elevation: 0}//导航条样式
        }
    },
    Main: {screen: MainScreen},

},
{
    initialRouteName: 'login', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        cardStack: {
            gesturesEnabled: true
        }
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    //onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    //onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
}
);

