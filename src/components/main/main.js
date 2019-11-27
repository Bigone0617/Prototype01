import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native'
import Main_form from './main_form'

export default class main extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Main_form/>
            </View>
        );
    };
}

const styles=StyleSheet.create({
    container: {
        flex:1
    }
});
