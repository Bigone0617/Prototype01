import React, {Component} from 'react';
import {Image,StyleSheet, View} from 'react-native'

export default class main_logo extends React.Component{
    render(){
        return(
            <View>
                <Image style={styles.img} source={require('../icon/icon_main.png')}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    img: {
        width: 100,
        height: 100,
        opacity: 0.85
    }
});