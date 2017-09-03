import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class LearnView extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'green'}}>
                <View style={styles.item}>
                    <View style={[styles.flex,styles.center]}>
                        <Text>模块一</Text>
                    </View>
                    <View style={[styles.flex,styles.borderLeftRight]}>
                        <View style={[styles.flex,styles.center,styles.borderBottom]}>
                            <Text>模块二（上）</Text>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text>模块二（下）</Text>
                        </View>
                    </View>
                    <View style={[styles.flex,styles.borderLeftRight]}>
                        <View style={[styles.flex,styles.center,styles.borderBottom]}>
                            <Text>模块三（上）</Text>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text>模块三（下）</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:25,backgroundColor:"#f2f2f2"
    },
    //公共组件
    flex:{
        flex:1,backgroundColor:"red"
    },
    center:{
        justifyContent:"center",
        alignItems:"center",
    },
    item:{
        flexDirection:"row",
        backgroundColor:"#ff607c",
        marginTop:5,marginLeft:5,marginRight:5,height:80,borderRadius:5,
    },
    borderLeftRight:{
        borderLeftWidth:1,borderRightWidth:1,borderColor:"white"
    },
    borderBottom:{
        borderBottomWidth:1,borderColor:"white"
    }
})