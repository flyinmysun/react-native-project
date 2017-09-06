import React from "react"
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from "react-native"

export default class SearchBar extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} {...this.props}/>
                </View>
                <TouchableOpacity style={styles.btn} {...this.props}>
                    <Text style={styles.btnText}>搜索</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles= StyleSheet.create({
     container:{
         flexDirection:"row",justifyContent:"flex-end",height:44,marginTop:10
     },
     inputContainer:{
         flex:1,marginLeft:5
     },
     input:{
         paddingLeft:8,borderRadius:4,borderWidth:1,borderColor:"#ccc",height:44
     },
     btn:{
         backgroundColor:"cyan",justifyContent:"center",alignItems:"center",width:55,height:44,borderRadius:4,marginLeft:5,marginRight:5
     },
     btnText:{
         color:"#fff",alignSelf:"center"
     }
})
