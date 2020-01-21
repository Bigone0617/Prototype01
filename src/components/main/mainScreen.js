import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions,TouchableWithoutFeedback } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';


import ChatScreen from '../chat/chatScreen';
import MapScreen from '../map/mapScreen';
import BoardScreen from '../board/boardScreen';
import SearchScreen from '../search/searchScreen';
import ProfileScreen from '../profile/profileScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const MapStack = createStackNavigator(
    {
        MapScreen
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            headerLeft: <Image style={{width:35,height:35,marginLeft:10}} source={require('../../icon/icon_main.png')}/>,
            headerRight: 
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('Chat')}>
                    <View>
                        <Icon name='ios-chatboxes' size={35} style={{marginRight:10, color:"#FF5B5B"}}/>
                    </View>
                </TouchableWithoutFeedback>
        }),
    }
);
const ChatStack = createStackNavigator(
    {
        ChatScreen
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            headerLeft: 
                <TouchableWithoutFeedback onPress={()=> navigation.navigate('Map')}>
                    <Image style={{width:35,height:35,marginLeft:10}} source={require('../../icon/icon_main.png')}/>
                </TouchableWithoutFeedback>,
        }),
    }
);
const BoardStack = createStackNavigator(
    {
        BoardScreen
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            headerLeft: 
                <TouchableWithoutFeedback onPress={()=> navigation.navigate('Map')}>
                    <Image style={{width:35,height:35,marginLeft:10}} source={require('../../icon/icon_main.png')}/>
                </TouchableWithoutFeedback>,
            headerRight: 
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('Chat')}>
                        <View>
                            <Icon name='ios-chatboxes' size={35} style={{marginRight:10, color:"#FF5B5B"}}/>
                        </View>
                </TouchableWithoutFeedback>
        }),
    }
);
const SearchStack = createStackNavigator(
    {
        SearchScreen
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            headerLeft: 
                <TouchableWithoutFeedback onPress={()=> navigation.navigate('Map')}>
                    <Image style={{width:35,height:35,marginLeft:10}} source={require('../../icon/icon_main.png')}/>
                </TouchableWithoutFeedback>,
            headerRight: 
                 <TouchableWithoutFeedback onPress={()=>navigation.navigate('Chat')}>
                        <View>
                            <Icon name='ios-chatboxes' size={35} style={{marginRight:10, color:"#FF5B5B"}}/>
                        </View>
                </TouchableWithoutFeedback>
        }),
    }
);
const ProfileStack = createStackNavigator(
    {
        ProfileScreen
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            headerLeft: 
                <TouchableWithoutFeedback onPress={()=> navigation.navigate('Map')}>
                    <Image style={{width:35,height:35,marginLeft:10}} source={require('../../icon/icon_main.png')}/>
                </TouchableWithoutFeedback>,
            headerRight: 
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('Chat')}>
                    <View>
                        <Icon name='ios-chatboxes' size={35} style={{marginRight:10, color:"#FF5B5B"}}/>
                    </View>
                </TouchableWithoutFeedback>
        }),
    }
);

const TabNavigator = createBottomTabNavigator(
    {
        Map: MapStack,
        Search : SearchStack,
        Chat: ChatStack,
        Board: BoardStack,
        Profile: ProfileStack
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon = "▲";

                if(routeName === 'Map'){
                    icon = "🌍";
                } else if(routeName === 'Search'){
                    icon = "🔍"
                } else if(routeName === 'Chat'){
                    icon = "📫"
                } else if(routeName === 'Board'){
                    icon = "📋"
                } else if(routeName === 'Profile'){
                    icon = "🐶"
                }

                // can use react-native-vector-icons
                // <Icon name={iconName} size={iconSize} color={iconColor} />
                return <Text style={{color: focused && "#46c3ad" || "#888"}}>{icon}</Text>
            }
        }),
        lazy: false,
        tabBarOptions: {
            activeTintColor: "#46c3ad",
            inactiveTintColor: "#888",
        },
    }
);


const MainStack = createStackNavigator(
    {
        TabNavigator:{
            screen: TabNavigator,
            navigationOptions: ({navigation}) => ({
                header: null
            })
        }
    }
)

const styles = StyleSheet.create({
    title:{
        flex:1,
        flexDirection: "row" 
    }
});

const _chatScreen=()=>{
    navigation.state = "Chat"
}

export default createAppContainer(MainStack);