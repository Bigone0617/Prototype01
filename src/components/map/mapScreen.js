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
                    initialRegion={{
                        latitude:37.33307,
                        longitude: -122.0324,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02
                    }}
                />
                <View style={styles.text}>
                    <TouchableOpacity onPress={()=>this._reset()}>
                        <Text>CLICK!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    _reset=()=> {
        console.log(this.state.initialPosition.latitude);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    marker: {
        marginLeft: 46,
        marginTop: 33,
        fontWeight: 'bold',
      },
      text: {
          flex: 1
      }
});