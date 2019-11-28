import React from 'react';
import {View, StyleSheet, Text, TextInput, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default class signup extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleCotainer}>
                    <Text style={styles.title}>회원가입</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text> 아이디</Text>
                    <TextInput style={styles.textInput} placeholder={"아이디 (영문 12자)"}/>
                    <Text> 비밀번호</Text>
                    <TextInput style={styles.textInput} placeholder={"비밀번호 (영문, 숫자 조합 6~20자)"}/>
                    <Text> 비밀번호 확인</Text>
                    <TextInput style={styles.textInput} placeholder={"비밀번호 확인"}/>
                </View>
                <View>
                    
                </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center"
    },
    titleCotainer: {
        flex: 1,
        backgroundColor: "#FF5B5B",
        width: width,
        alignItems:"center",
        justifyContent: "center"
    },
    title:{
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    inputContainer: {
        width: width * 0.8,
        flex: 9
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginBottom: 10
    }
});