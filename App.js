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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Main from './src/components/main/main'

export default class App extends React.Component{
  state = {
    isSignIn: false, 
    isSignUp: false
  };
  render(){
    const {isSignIn, isSignUp} = this.state;
    return(
      <View style={styles.container}>
        <Main/>
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
