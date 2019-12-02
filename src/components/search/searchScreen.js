import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class SearchScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>SearchScreen!!!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }
});