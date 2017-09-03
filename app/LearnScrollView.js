/**
 * Created by Administrator on 2017/9/2.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    RefreshControl,
} from 'react-native';

export default class LearnScrollView extends React.Component{
    _onRefresh=()=>{
        alert("正在刷新")
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}
                            onMomentumScrollStart={()=>{console.log("滚动开始")}}
                            onMomentumScrollEnd={()=>{console.log("滚动结束")}}
                            refreshControl={
                                <RefreshControl
                                    refreshing = {false}
                                    tintColor="blue"
                                    title="下拉刷新"
                                    onRefresh={()=>{
                                    this._onRefresh();
                                }
                                }/>
                            }>
                    <View style={styles.view_1}></View>
                    <View style={styles.view_2}></View>
                    <View style={styles.view_3}></View>
                </ScrollView>
            </View>
        )
    }
}

const styles= StyleSheet.create({
   container:{
       flex:1,backgroundColor:"cyan",
   },
    scrollView:{
       marginTop:25,backgroundColor:"#ccc"
    },
    view_1:{
       margin:15,
        flex:1,
        height:300,
        backgroundColor:"yellow"
    },
    view_2:{
        margin:15,
        flex:1,
        height:300,
        backgroundColor:"blue"
    },
    view_3:{
        margin:15,
        flex:1,
        height:300,
        backgroundColor:"pink"
    }
})