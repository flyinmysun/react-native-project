/**
 * Created by Administrator on 2017/9/2.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    TextInput,
} from 'react-native';

export default class LearnTouchableOpacity extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputVal:"",
        }
    }

    clickBtn=()=>{
        alert(this.state.inputVal)
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.flex}>
                    <TextInput style={styles.input} underlineColorAndroid="transparent"
                    returnKeyLabel="search" placeholder="请输入内容" onChangeText={(value)=>{
                        this.setState({...this.state,inputVal:value})
                    }}>
                    </TextInput>
                </View>
                <TouchableHighlight style={styles.btn} onPress={()=>{
                    this.clickBtn();
                }}>
                    <Text style={styles.search}>搜索</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
         marginTop:25,flexDirection:"row",height:45,
    },
    flex:{
        flex:1
    },
    input:{
        height:45,borderWidth:1,borderColor:"#CCC",marginLeft:5,padding:5,borderRadius:4,
    },
    btn:{
        width:55,marginLeft:5,marginRight:5,backgroundColor:"#29b6b6",height:45,justifyContent:"center",
        alignItems:"center",borderRadius:4,
    },
    search:{
      color:"#fff",fontSize:14,
    }


})