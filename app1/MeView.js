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

export default class HomeView extends React.Component{

    render(){
        return(
            <View>
              <Text onPress={()=>{
                  this.props.navigation.navigate('login');
              }}>登录</Text>
            </View>
        )
    }
}