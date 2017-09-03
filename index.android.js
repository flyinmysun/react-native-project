/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LearnView from "./app/LearnView"
import LoginView from "./app/LoginView"
import Root from './app1/Root'
import LearnText from './app/LearnText'
import LearnTouchableOpacity from  "./app/LearnTouchableOpacity"
import LearnImage from  "./app/LearnImage"
import LearnScrollView from  "./app/LearnScrollView"

export default class first_app extends Component {
  render() {
    /*let news = [
        "1.习近平主席的睿智话语在世界回响,精彩的金砖故事在娓娓诉说",
        "2.中国航母编队最后一块拼图，终于补齐了",
        "3.金砖国家领导人厦门会晤即将举行，我们注意到一些与会领导人纷纷表达热切期待，各媒体也进行了积极评价。",
        "4.大修183天 毛主席纪念堂重新开放",
    ];*/
    return (
        <Root>

        </Root>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor:"yellow",

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('first_app', () => first_app);
