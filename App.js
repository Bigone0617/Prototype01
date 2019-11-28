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
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Main from './src/components/main/mainScreen';
import Signin from './src/components/main/singin/signin';
import Signup from './src/components/main/signup/signup';

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Signup/>
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

// const MainStack = createStackNavigator(
//   {
//     Main
//   },
//   {
//     defaultNavigationOptions:({navigation}) => ({
//       title: 'Main'
//     }),
//   }
// );

// const SignInStack = createStackNavigator(
//   {
//     Signin
//   },
//   {
//     defaultNavigationOptions:({navigation}) => ({
//       title: 'Signin'
//     }),
//   }
// );

// const TabNavigator = createBottomTabNavigator(
//   {
//     Main: MainStack,
//     Signin: SignInStack,
//   },
//   {
//       defaultNavigationOptions: ({navigation}) => ({
//           tabBarIcon: ({focused, horizontal, tintColor}) => {
//               const {routeName} = navigation.state;
//               let icon = "▲";

//               if(routeName === 'Main'){
//                   icon = "🌈";
//               } else if(routeName === 'Signin'){
//                   icon = "🌙"
//               } 

//               // can use react-native-vector-icons
//               // <Icon name={iconName} size={iconSize} color={iconColor} />
//               return <Text style={{color: focused && "#46c3ad" || "#888"}}>{icon}</Text>
//           }
//       }),
//       lazy: false,
//       tabBarOptions: {
//           activeTintColor: "#46c3ad",
//           inactiveTintColor: "#888",
//       },
//   }
// );

// const AppStack = createStackNavigator(
//   {
//       //LoginScreen: LoginScreen,
//       TabNavigator: {
//           screen: TabNavigator,
//           navigationOptions: ({navigation}) => ({
//               header: null,
//           }),
//       },
//   }
// );

//export default createAppContainer(AppStack);
//export default App;
