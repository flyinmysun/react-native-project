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
        headerTitle:"微信",
        headerStyle:{backgroundColor:"#333333",elevation: 0},
        headerTitleStyle:{color:"#fafafa"},
        headerRight:<Image
            source={require("./imgs/plus.png")}
            style={styles.headerRight}
        />,
        showIcon:true,
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
                                            <View>
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

