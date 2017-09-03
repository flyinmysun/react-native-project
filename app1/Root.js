/**
 * Created by Administrator on 2017/9/2.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import { StackNavigator,TabNavigator } from 'react-navigation';
import LoginView from './LoginView'
import HomeView from './HomeView'
import CourseView from './CourseView'
import MeView from './MeView'

export default class Root extends React.Component{

    render(){
        return(
            <SimpleApp></SimpleApp>
        )
    }
}

const TabView = TabNavigator({
    home: {
        screen: HomeView,
        navigationOptions:{
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./imgs/home.png')}
                    style={{tintColor: tintColor,width:26,height:26}}
                />
            ),
        }
    },
    course: {
        screen: CourseView,
        navigationOptions:{
            tabBarLabel: '课程',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./imgs/home.png')}
                    style={{tintColor: tintColor,width:26,height:26}}
                />
            ),
        }
    },
    me: {
        screen: MeView,
        navigationOptions:{
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./imgs/home.png')}
                    style={{tintColor: tintColor,width:26,height:26}}
                />
            ),
        }
    },
}, {
    tabBarPosition:'bottom',
    tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor:'#999',
        style:{backgroundColor:'#fff'},
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        labelStyle:{
            fontSize:10
        }
    },
});

const SimpleApp = StackNavigator({
    tab: { screen: TabView },
    login: {
        screen: LoginView,
        navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
            headerTitle:"登录"
        }
    },
},
{
    initialRouteName: 'tab', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        cardStack: {
            gesturesEnabled: true
        }
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
});