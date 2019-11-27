import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Logo from './main_logo';
import Middle from './main_middle';
import Bottom from './main_bottom';

export default class main_form extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <Logo/>
                </View>
                <View style={styles.middle}>
                    <Middle/>
                </View>
                {/* <View style={styles.bottom}>
                    <Bottom/>
                </View> */}
            </View>
        );
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
        alignItems: "center",
        justifyContent: "center"
      },
    //   bottom:{
    //     flex:1,
    //     backgroundColor:"#FF5B5B",
    //     opacity: 0.85
    //   }
});