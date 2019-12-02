
import React,{Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class start_form extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image style={styles.img} source={require('../../icon/icon_main.png')}/>
                    <Text style={styles.text_Main}>견생연분</Text>
                </View>
                <View style={styles.middle}>
                    <TouchableOpacity onPress={()=> this._clickSignIn()}>
                        <View style={styles.signIn}>
                            <Text style={styles.signInText}>로그인</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this._clickSignUp()}>
                        <View style={styles.signUp}>
                            <Text style={styles.signUpText}>회원가입</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    _clickSignIn = ()=>{
        this.props.navigation.navigate('SignIn')
    }
    _clickSignUp = () => {
        this.props.navigation.navigate('SignUp')
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"white",
        flexDirection:"column"
    },
    top:{
        flex: 5,
        backgroundColor:"white",
        alignItems: "center",
        justifyContent: "center"
    },
    middle:{
        flex:5,
        backgroundColor:"white",
        alignItems: "center"
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
    },
      signIn:{
        width: 200,
        height: 40,
        borderRadius: 50,
        borderColor: "#FF5B5B",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        marginTop: 30,
        opacity: 0.85
    },
    signInText:{
        fontSize: 15,
        color:"#FF5B5B",
        opacity: 0.85
    },
    signUp: {
        width: 200,
        height: 40,
        borderRadius: 50,
        borderColor: "#FF3980",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.85
    },
    signUpText: {
        fontSize: 15,
        color: "#FF3980",
        opacity: 0.85
    }
});

















//@@@@@@@@@@@@원래 폼@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2
// import React,{Component} from 'react';
// import {Text, View, StyleSheet} from 'react-native';

// import Logo from './main_logo';
// import Middle from './main_middle';



// export default class main_form extends React.Component{
//     render(){
//         return(
//             <View style={styles.container}>
//                 <View style={styles.top}>
//                     <Logo/>
//                 </View>
//                 <View style={styles.middle}>
//                     <Middle/>
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         backgroundColor:"white",
//         flexDirection:"column"
//     },
//     top:{
//         flex: 5,
//         backgroundColor:"white",
//         alignItems: "center",
//         justifyContent: "center"
//       },
//       middle:{
//         flex:5,
//         backgroundColor:"white",
//         alignItems: "center",
//         justifyContent: "center"
//       },
// });
