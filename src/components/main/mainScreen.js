import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';


import ChatScreen from '../chat/chatScreen';
import MapScreen from '../map/mapScreen';
import BoardScreen from '../board/boardScreen';
import SearchScreen from '../search/searchScreen';
import ProfileScreen from '../profile/profileScreen';

const {width, height} = Dimensions.get('window');

const MapStack = createStackNavigator(
    {
        MapScreen
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            headerLeft: <Image style={{width:35,height:35,marginLeft:10}} source={require('../../icon/icon_main.png')}/>,
            //title:'견생연분',
            headerRight: <Icon name='ios-chatboxes' size={35} style={{marginRight:10, color:"#FF5B5B"}}/>
        }),
    }
);
const ChatStack = createStackNavigator(
    {
        ChatScreen
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            //title:'견생연분'
        }),
    }
);
const BoardStack = createStackNavigator(
    {
        BoardScreen
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            title:'견생연분'
        }),
    }
);
const SearchStack = createStackNavigator(
    {
        SearchScreen
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            title:'견생연분'
        }),
    }
);
const ProfileStack = createStackNavigator(
    {
        ProfileScreen
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            title:'견생연분'
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

export default createAppContainer(MainStack);