import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { HEIGHT, theme_green, WIDTH } from '../../constants/constants';
import { welcome } from '../../data/welcome-api';

import Swiper from 'react-native-swiper'

export class WelcomeScreen extends Component {
    render() {
        return (
        <View style={styles.Container} >
            <Swiper
            showsPagination
            paginationStyle={{ marginBottom: HEIGHT *.35 }}
            activeDotStyle={{ width: 25, height: 10, borderRadius: 10, backgroundColor: theme_green }}
            dotStyle={{ height: 10, width: 10, borderRadius: 5, backgroundColor: 'white' }}
            >
                <ImageBackground style={styles.Image} source={{ uri: welcome[0].url }} >
                    <View style={styles.Opacity} />
                    <View style={styles.TextOnBackground}>
                        <View style={styles.TextView}>
                            <Text style={styles.Header}>{welcome[0].descr}</Text>
                            <Text style={styles.SubTExt}>{welcome[0].descr}</Text>
                        </View>                        
                    </View>
                </ImageBackground>
                <ImageBackground style={styles.Image} source={{ uri: welcome[1].url }} >
                    <View style={styles.Opacity} />
                    <View style={styles.TextOnBackground}>
                        <View style={styles.TextView}>
                            <Text style={styles.Header}>{welcome[1].descr}</Text>
                            <Text style={styles.SubTExt}>{welcome[1].descr}</Text>
                        </View>                        
                    </View>
                </ImageBackground>
                <ImageBackground style={styles.Image} source={{ uri: welcome[2].url }} >
                    <View style={styles.Opacity} />
                    <View style={styles.TextOnBackground}>
                        <View style={styles.TextView}>
                            <Text style={styles.Header}>{welcome[2].descr}</Text>
                            <Text style={styles.SubTExt}>{welcome[2].descr}</Text>
                        </View>                        
                    </View>
                </ImageBackground>
            </Swiper>
            
            <View style={styles.ButtonView}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpScreen')} style={styles.Button} >
                    <Text style={styles.ButtonText}>Signup</Text>
                </TouchableOpacity>    
                <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')} style={[styles.Button, { backgroundColor: 'black' }]} >
                    <Text style= {[styles.ButtonText, { color: 'white' }]}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image: {
        width: WIDTH,
        height: HEIGHT,
        resizeMode: 'cover'
    },
    Opacity: {
        backgroundColor: 'black',
        height: HEIGHT,
        opacity: .4
    },
    TextOnBackground: {
        position: 'absolute'
    },
    TextView: {
        marginTop: HEIGHT *.3,
        margin: WIDTH *.1,
        maxWidth: WIDTH *.8
    },
    Header: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white'
    },
    SubTExt: {
        color: 'white',
        fontSize: 18,
        textTransform: 'capitalize'
    },
    ButtonView: {
        position: 'absolute',
        bottom: HEIGHT *.15,
    },
    Button: {
        backgroundColor: theme_green,
        height: 50,
        width: WIDTH *.8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: WIDTH *.4,
        marginTop: 10
    },
    ButtonText: {
        fontSize: 16
    }
})
export default WelcomeScreen