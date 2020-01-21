import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
export default class MapScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            markerPosition: {
                latitude: 0,
                longitude: 0
            }
        }
      }
    
    componentDidMount(){
            Geolocation.getCurrentPosition((position)=> {
            const lat = parseFloat(position.coords.latitude)
            const long = parseFloat(position.coords.longitude)
            const initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }
            this.setState({initialPosition: initialRegion})
            this.setState({markerPosition: initialRegion})
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout:20000, maximumAge: 1000})
    }

    render(){
        return(
            <View style={styles.container}>
                {/* <MapView 
                    style={styles.map}
                    //initialRegion={this.state.initialPosition}
                >
                </MapView> */}
                <MapView style={styles.map}
                    showsUserLocation
                    region={{
                        latitude: this.state.initialPosition.latitude,
                        longitude: this.state.initialPosition.longitude,
                        latitudeDelta: this.state.initialPosition.latitudeDelta,
                        longitudeDelta: this.state.initialPosition.longitudeDelta
                    }}
                >
                    <Marker
                      style={styles.marker}
                      coordinate={{
                        latitude: this.state.initialPosition.latitude,   
                        longitude: this.state.initialPosition.longitude
                      }} 
                      onPress={()=>console.log("marker!")} 
                    >
                        <TouchableOpacity onPress={()=>this._click()}>
                            <Image 
                                style={{width:50, height:50}}
                                source={require('../../icon/icon_main.png')}
                            />
                        </TouchableOpacity>
                    </Marker>
                </MapView>
                <View style={styles.miniView}>

                </View>

                {/* <View style={styles.text}>
                    <TouchableOpacity onPress={()=>this._reset()}>
                        <Text>CLICK!</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        )
    }

    _reset=()=> {
            Geolocation.getCurrentPosition((position)=> {
            const lat = parseFloat(position.coords.latitude)
            const long = parseFloat(position.coords.longitude)
            const initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }
            this.setState({initialPosition: initialRegion})
            this.setState({markerPosition: initialRegion})
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout:20000, maximumAge: 1000});
        console.log(this.state.initialPosition.latitude+"@@@@@"+this.state.initialPosition.longitude);
    }
    _click=()=>{
        console.log(this.state.initialPosition.latitude+"@@@"+this.state.initialPosition.longitude);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    // map: {
    //     ...StyleSheet.absoluteFillObject
    // },
    map:{
        flex:1,
        top:0,
        right:0,
        left:0,
        bottom:0,
        position:'absolute'
    },  
    marker: {
        marginLeft: 46,
        marginTop: 33,
        fontWeight: 'bold',
      },
      text: {
          flex: 1
      },
      miniView:{
          
      }
});