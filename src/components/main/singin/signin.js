import React,{Component} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Image, Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window');

export default class signin extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={{marginBottom:1}}> 아이디</Text>
                    <TextInput 
                        style={styles.textInput}
                        placeholder={'아이디'}
                        />
                    <Text> 비밀번호</Text>
                    <TextInput 
                        style={styles.textInput}
                        placeholder={'비밀번호'}
                        />
                </View>
                <View style={styles.loginContainer}>
                    <View style={styles.loginButton}>
                        <TouchableOpacity onPress={() => this._clickLogin()}>
                            <View style={styles.login}>
                                <Text style={{color:"white", fontSize:20, fontWeight: "800"}}>로그인</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.anotherLoginButtonContainer}>
                        <TouchableOpacity onPress={() => this._clickFacebook()}>
                            <Image style={styles.anotherLoginButton} source={require('../../../icon/icon_facebook_color.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._clickGoogle()}>
                            <Image style={styles.anotherLoginButton} source={require('../../../icon/icon_google_color.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._clickInstagram()}>
                            <Image style={styles.anotherLoginButton} source={require('../../../icon/icon_instagram_color.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._clickKakaotalk()}>
                            <Image style={styles.anotherLoginButton} source={require('../../../icon/icon_kakaotalk_color.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.find}>
                        <View>
                            <Text style={styles.findText} onPress={()=>this._clickFacebook()}>아이디·비밀번호를 잃어버리셨나요? | </Text>
                        </View>
                        <View>
                            <Text style={styles.findText} onPress={()=>this._clickFacebook()}>회원가입</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
    _clickLogin=()=>{
        console.log("로그인!!!");
    }
    _clickFacebook=()=>{
        console.log("facebook");
    };
    _clickGoogle=()=>{
        console.log("google");
    };
    _clickInstagram=()=>{
        console.log("instagram");
    };
    _clickKakaotalk=()=>{
        console.log("kakaotalk");
    };
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "white",
        justifyContent:"center",
        alignItems: "center"
    },
    inputContainer:{
        flexDirection: "column"
    },
    input:{
        flexDirection:"column"
    }, 
    textInput: {
        width: width * 0.85,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#8F8F8F",
        marginBottom: 15,
        
    },
    loginContainer: {
        marginTop: 40
    },
    login: {
        width: width * 0.8,
        height: 45,
        borderRadius: 5,
        backgroundColor:"#FF5B5B",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.85
    },
    loginButton: {
    },
    anotherLoginButtonContainer: {
        flexDirection: "row",
        marginTop: 40,
        justifyContent:"center",
        alignItems:"center"
    },
    anotherLoginButton: {
        width: 30,
        height: 30,
        marginLeft: 15
    },
    anotherLoginButton1: {
        borderWidth: 1,
        borderColor:"black",
        width: 30,
        height: 30,
    },
    find:{
        alignItems:"center",
        justifyContent: "center",
        flexDirection:"row",
        marginTop: 30
    },
    findText: {
        fontSize: 13,
        color: "#8F8F8F",
        fontWeight: "700"
    }
});