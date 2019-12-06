import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default class Test extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.33307,
                        longitude: -122.0324,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map:{
        ...StyleSheet.absoluteFillObject,
    }
});

