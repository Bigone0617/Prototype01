import React, {Component} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class main_bottom extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> this._clickGoogle()}>
                    <Image style={{width:30, height:30, marginLeft: 60}} source={require('../../icon/icon_google_white.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this._clickInsta()}>
                    <Image style={{width:30, height:30}} source={require('../../icon/icon_insta_white.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this._clickFacebook()}>
                    <Image style={{width:30, height:30}} source={require('../../icon/icon_facebook_white.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this._clickKakao()}>
                    <Image style={{width:30, height:30, marginRight: 60}} source={require('../../icon/icon_kakao_white.png')}/>
                </TouchableOpacity>
            </View>
        )
    };
    _clickGoogle=()=> {
        console.log('Google!');
    }
    _clickInsta=()=> {
        console.log('Insta!');
    }
    _clickFacebook=()=> {
        console.log('Facebook!');
    }
    _clickKakao=()=> {
        console.log('Kakao!');
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    }
});