import React from "react"
import {Dimensions,ActivityIndicator} from "react-native"

let util={
    //获取屏幕的宽高
    windowSize:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height
    },

    //基于fetch方法获取数据,简单封装，回调方法在组件中实现
    getRequests(url,successCallback,failCallback){
        fetch(url)
            .then((response)=>{response.json()})
            .then((responseData)=>{successCallback(responseData)})
            .catch((error)=>{failCallback(error)})
    },

    //loading效果
    loading:<ActivityIndicator style={{marginTop:200}}/>

}