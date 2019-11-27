import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class main_middle extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <TouchableOpacity onPress={(this._clickSignIn)}>
                    <View style={styles.signIn}>
                        <Text style={styles.signInText}>로그인</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={(this._clickSignUp)}>
                    <View style={styles.signUp}>
                        <Text style={styles.signUpText}>회원가입</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    _clickSignIn = () => {
        console.log("signin!");
    }
    _clickSignUp = () => {
        console.log("signup!");
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    signIn:{
        width: 150,
        height: 50,
        borderRadius: 50,
        borderColor: "#FF3980",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 150,
        opacity: 0.85
    },
    signInText:{
        fontSize: 15,
        color:"#FF3980"
    },
    signUp: {
        width: 150,
        height: 50,
        borderRadius: 50,
        borderColor: "#FF5B5B",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.85
    },
    signUpText: {
        fontSize: 15,
        color: "#FF5B5B"
    }
});