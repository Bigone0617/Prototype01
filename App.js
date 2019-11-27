import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
//import {createBottomTabNavigator} from 'react-navigation-tabs';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Main from './src/components/main/mainScreen'
import Signin from './src/components/main/singin/signin'

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Main/>
        {/* <Signin/> */}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

//export default App;
