import React from "react"
import {View,Text,StyleSheet,Image,ScrollView} from "react-native"
import Data from "./json/data.json"

const styles = StyleSheet.create({
    flex:{flex:1},
    headerRight:{width:22,height:22,marginRight:20},
    container:{backgroundColor:"#f2f2f2"},
    searchWrap:{paddingLeft:5,paddingRight:5},
    searchBar:{backgroundColor:"#fafafa",justifyContent:"center",alignItems:"center",flexDirection:"row",
    marginTop:5,height:24,borderRadius:5}
})

export default class WeChatScreen extends React.Component{
    static navigationOptions = {
        headerTitle:"微信",//标题
        headerStyle:{
            backgroundColor:"#333333",//头部背景颜色
            elevation: 0  //去掉头部底下的阴影，ios是设置透明度
        },//头部样式
        headerTintColor: '#fafafa',//头部整体颜色，包括默认图标的颜色
        headerTitleStyle:{ //标题文字样式
            color:"#fafafa"
        },
        headerBackTitleStyle:{ //返回文字样式
            color:"#fafafa"
        },
        //headerLeft:null,//自定义左边返回按钮区域
        headerRight:<Image
            source={require("./imgs/plus.png")}
            style={styles.headerRight}
        />,
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={true} >
                    <View style={[styles.searchWrap,styles.flex]}>
                        <View style={[styles.flex,styles.searchBar]}>
                            <Image source={require("./imgs/search.png")}/>
                            <Text style={{fontSize:12}}>搜索</Text>
                        </View>
                        <View>
                            {
                                Data.data.map((item,index)=>{
                                    return (
                                        <View key={index} style={{height:200}}>
                                            <Text>{item.name}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

