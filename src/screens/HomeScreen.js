import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, StatusBar, Modal } from 'react-native'
import { Feather, Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { HEIGHT, theme_green, theme_grey, WIDTH } from '../constants/constants';
import { api } from '../data/api';

export class HomeScreen extends Component {
    
    render() {
        return (
        <ImageBackground style={styles.Container} source={ require('../../assets/images/map.png') } >
            <View style={styles.HeaderView}>
                <Text style={styles.HeaderText}>Hey, where do you want to park?</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchScreen')} style={styles.HeaderSearch}>
                    <Feather name="search" size={20} color="black" />
                    <Text style={styles.SearchInput}>Try 'Kigali City Tower'</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("NearestParking")} style={styles.ListViewButton}>
                <Feather name="list" size={26} color="white" />
            </TouchableOpacity>
        </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        resizeMode: 'contain'
    },
    HeaderView: {
        backgroundColor: theme_green,
        paddingTop: StatusBar.currentHeight + 25,
        paddingLeft: 15,
        paddingRight: 15,
    },
    HeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
        maxWidth: WIDTH *.5
    },
    HeaderSearch: {
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        backgroundColor: theme_grey,
        height: 45,
        alignItems: 'center',
        borderRadius: 30,
        paddingLeft: 15,
        marginTop: 20,
        marginBottom: -15,
        elevation: 10
    },
    SearchInput: {
        marginRight: 20,
        marginLeft: 10,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'grey'
    },
    ListViewButton: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme_green,
        elevation: 5
    }
})
export default HomeScreen
