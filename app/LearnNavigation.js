/**
 * Created by Administrator on 2017/9/2.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class LearnNavigation extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.net}>
                    <Image style={styles.netImage} resizeMode="contain"
                           source={{uri:"https://www.hanjk.com/crm/imgs/logo.png "}}/>
                </View>
                <View style={styles.local}>
                    <Image style={styles.localImage}/>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,margin:25,
    },
    net:{
        marginTop:30,width:300,height:250,justifyContent:"center",alignItems:"center",backgroundColor:"gray"
    },
    netImage:{
        width:280,height:200,
    },
    local:{
        marginTop:30,width:300,height:250,justifyContent:"center",alignItems:"center",backgroundColor:"gray"
    },
    localImage:{
        width:280,height:200,backgroundColor:"green"
    }
})