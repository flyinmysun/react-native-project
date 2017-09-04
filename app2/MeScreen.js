import React from "react"
import {Text,View,StyleSheet,Image} from "react-native"

export default class MeScreen extends React.Component{
    static navigationOptions = {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        headerTitle:"微信",
        headerTitleStyle:{backgroundColor:"#333333",color:"#fafafa"},
        headerRight:<Image source={require("./imgs/plus.png")}/>,
    }
    render(){
        return(
            <Text>W D 页面</Text>
        )
    }
}