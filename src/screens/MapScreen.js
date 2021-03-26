import React, { Component } from 'react'
import { Image, ImageBackground, StatusBar, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import { HEIGHT, WIDTH } from '../constants/constants';

export class MapScreen extends Component {
    render() {
        return (
        <ImageBackground style={styles.Container} source={ require('../../assets/images/map.png') } >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackArrow}>
                <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
        </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        height: HEIGHT,
        width: WIDTH,
        paddingTop: StatusBar.currentHeight
    },
    BackArrow: {
        backgroundColor: 'white',
        height: 45,
        width: 45,
        margin: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
        // position: 'absolute'
    },
})
export default MapScreen
