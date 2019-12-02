import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    TextInput
} from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const {width, height} = Dimensions.get('window');
const radio_props = [
    {
        label: '남자',
        value: 0
    }, {
        label: '여자',
        value: 1
    }
];

export default class signupSub extends React.Component {
    constructor() {
        super()
        this.state = {
            radio_props: [
                {
                    label: '남자',
                    value: 0
                }, {
                    label: '여자',
                    value: 1
                }
            ],
            sex: null,
            radio_index: 0
        }
    }
    render() {
        const {sex} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.titleCotainer}>
                    <Text style={styles.title}>회원가입</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>
                        닉네임</Text>
                    <TextInput style={styles.textInput} placeholder={"닉네임 (한글6자, 영문12자)"}/>
                    <Text style={styles.inputText}>
                        이메일</Text>
                    <TextInput style={styles.textInput} placeholder={"이메일"}/>
                    <TouchableOpacity style={styles.touchLocation}>
                        <View
                            style={{
                                paddingTop: 5,
                                paddingBottom: 20,
                                flexDirection: "row"
                            }}>
                            <Text style={styles.inputText}>관심지역 (Click)</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.radio}>
                        <RadioForm formHorizontal={true} animation={true}>
                            {
                                this
                                    .state
                                    .radio_props
                                    .map((obj, i) => {
                                        var onPress = (value, index) => {
                                            this.setState({sex: value, radio_index: index});
                                        }
                                        return (
                                            <RadioButton labelHorizontal={true} key={i}>
                                                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                                <RadioButtonInput 
                                                    obj={obj} 
                                                    index={i} 
                                                    isSelected={this.state.radio_index === i} 
                                                    onPress={onPress} buttonInnerColor={'#FF5B5B'} 
                                                    buttonOuterColor={this.state.radio_index === i ? '#FF5B5B' : '#000'} buttonSize={30} buttonStyle={{}}
                                                />
                                                <RadioButtonLabel
                                                    obj={obj}
                                                    index={i}
                                                    onPress={onPress}
                                                    labelStyle={{
                                                        fontWeight: 'bold',
                                                        color: 'black',
                                                        marginLeft: 5,
                                                        marginRight: 20
                                                    }}
                                                    labelWrapStyle={{}}/>
                                            </RadioButton>
                                        )
                                    })
                            }
                        </RadioForm>
                    </View>
                    <View style={styles.birthContainer}>
                        <Text style={styles.inputText}>
                            출생 년도</Text>
                        <TextInput style={styles.textInput} placeholder={"출생 년도(예:1992)"}/>
                    </View>
                </View>
                <View style={styles.signUpContainer}>
                    <TouchableOpacity>
                        <View style={styles.signUpButton}>
                            <Text style={styles.signUpText}>회원가입</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
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
    touchLocation: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginBottom: 15,
        justifyContent: "center"
    },
    radio: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        paddingBottom: 15
    },
    birthContainer: {
        marginTop: 15
    },
    signUpContainer: {
        flex: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    signUpButton: {
        width: width * 0.8,
        height: 45,
        borderRadius: 5,
        backgroundColor: "#FF5B5B",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.85,
        marginBottom: 15
    },
    signUpText: {
        color: "white",
        fontSize: 20,
        fontWeight: "800"
    }
});