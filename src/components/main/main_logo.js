import React, {Component} from 'react';
import {Image,StyleSheet, View, Text} from 'react-native'

export default class main_logo extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.img} source={require('../../icon/icon_main.png')}/>
                <Text style={styles.text_Main}>견생연분</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        marginTop: 150
    },
    img: {
        width: 100,
        height: 100,
        opacity: 0.85
    },
    text_Main: {
        fontSize: 20,
        opacity: 0.8,
        marginTop: 20
    },
    text_Sub: {
        fontSize: 10,
        opacity: 0.5,
        marginTop: 10
    }
});