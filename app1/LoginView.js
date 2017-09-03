/**
 * Created by Administrator on 2017/9/2.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    PixelRatio,
    TouchableOpacity
} from 'react-native';

export default class LoginView extends React.Component{

    static navigationOptions = {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        headerTitle:"登录漾坨"
    }

    render(){
        return(
            <View>
                <View style={{marginTop:50}}>
                    <Text style={{alignSelf:'center',fontSize:26}}>长河国际</Text>
                </View>
                <View style={{marginTop:30,padding:10}}>
                    <View style={{height:80,borderWidth:1/PixelRatio.get(),borderRadius:5}}>
                        <View style={{borderBottomWidth:1/PixelRatio.get(),height:40,flexDirection:'row'}}>
                            <Text style={{alignSelf:'center',padding:10}}>用户:</Text>
                            <TextInput style={{flex:1}} underlineColorAndroid="transparent">
                            </TextInput>
                        </View>
                        <View style={{height:40,flexDirection:'row'}}>
                            <Text style={{alignSelf:'center',padding:10}}>密码:</Text>
                            <TextInput style={{flex:1}} underlineColorAndroid="transparent">
                            </TextInput>
                        </View>
                    </View>
                </View>

                <View style={{padding:10,marginTop:10}}>
                    <TouchableOpacity style={{backgroundColor:'green',alignItems:'center',
                        padding:8,borderRadius:5}} onPress={()=>{
                        this.props.navigation.navigate("home",{name:'漾坨'})
                    }}>
                        <Text style={{color:'#fff'}}>登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}