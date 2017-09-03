/**
 * Created by Administrator on 2017/9/2.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';

export default class LearnText extends React.Component{
    constructor(props){
        super(props);
    }
    show=(title)=>{
        alert(title)
    }
    render(){
        let newsComponets = [];  //定义一个空数组存放数据
        for(let i in this.props.news){
            let text = (
                <Text key={i} style={styles.news_item} numberOfLines={2} onPress={()=>{
                    this.show(this.props.news[i])
                }}>
                    {this.props.news[i]}
                </Text>
            )
            newsComponets.push(text)
        }


        return(
            <View style={styles.flex}>
                <View style={styles.head}>
                    <Text style={styles.font}>
                        <Text style={styles.font_1}>网易</Text>
                        <Text style={styles.font_2}>新闻</Text>
                        <Text style={styles.font_3}>有态度</Text>
                    </Text>
                </View>
                <View>
                    <Text style={styles.title}>今日要闻</Text>
                    {newsComponets}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    head:{
        marginTop:25,
        height:40,
        borderBottomWidth:1,
        borderBottomColor:"#ff00ff",
        alignItems:"center",
    },
    flex:{
        flex:1,
    },
    //公共字体部分
     font:{
        fontSize:25,
        textAlign:"center",
         fontWeight:"bold"
     },
     font_1:{
       color:"#ff00ff",
     },
    font_2:{
        backgroundColor:"#ff00ff",
        color:"#ffffff",
    },
    font_3:{
        color:"#000000"
    },
    title:{
        fontSize:20,color:"#ff00ff",padding:10,
    },
    news_item:{
        marginTop:10,marginLeft:10,marginRight:10,fontSize:15,lineHeight:30,
    }

})