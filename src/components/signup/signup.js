import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

const {width, height} = Dimensions.get('window');
export default class signup extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleCotainer}>
                    <Text style={styles.title}>회원가입</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>
                        아이디</Text>
                    <TextInput style={styles.textInput} placeholder={"아이디 (영문 12자)"}/>
                    <Text style={styles.inputText}>
                        비밀번호</Text>
                    <TextInput style={styles.textInput} placeholder={"비밀번호 (영문, 숫자 조합 6~20자)"}/>
                    <Text style={styles.inputText}>
                        비밀번호 확인</Text>
                    <TextInput style={styles.textInput} placeholder={"비밀번호 확인"}/>
                </View>
                <View style={styles.nextContainer}>
                    <TouchableOpacity onPress={()=>{this._clickSignUpSub()}}>
                        <View style={styles.nextButton}>
                            <Text style={styles.nextText}>다음</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.signinText} onPress={()=>this._clickSignIn()}>아이디가 있으신가요? 로그인하기</Text>
                </View>
            </View>
        );
    }
    _clickSignIn=()=> {
        this.props.navigation.navigate('SignIn');
    };
    _clickSignUpSub=()=> {
        this.props.navigation.navigate('SignUp_Sub');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    titleCotainer: {
        flex: 3,
        width: width,
        justifyContent: "center"
    },
    title: {
        color: "#FF5B5B",
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 40
    },
    inputContainer: {
        width: width * 0.8,
        flex: 9
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginBottom: 15
    },
    inputText: {
        fontWeight: "bold"
    },
    nextContainer: {
        flex: 5,
        alignItems: "center",
        //justifyContent: "center",
    },
    nextButton: {
        width: width * 0.8,
        height: 45,
        borderRadius: 5,
        backgroundColor: "#FF5B5B",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.85,
        marginBottom: 15
    },
    nextText: {
        color: "white",
        fontSize: 20,
        fontWeight: "800"
    },
    signinText: {
        fontSize: 13,
        color: "#8F8F8F",
        fontWeight: "700"
    }
});