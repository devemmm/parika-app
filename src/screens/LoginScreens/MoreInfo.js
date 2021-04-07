import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Modal } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons';
import { bright_green, HEIGHT, theme_green, WIDTH } from '../../constants/constants';


export class MoreInfo extends Component {
    render() {
        return (
        <View style={styles.Container} >
            <View style={styles.HeaderView} >
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackButton} >
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.BodyView}>
                    <Text style={styles.HeaderText} >Additional Details</Text>
                    <Text style={styles.SubText} >Thank you for creating an account on Parika App.</Text>
                    <Text>Please provide some more information for a better experience.</Text>
                    <View style={styles.InputView} >
                        <Text>+250 </Text>
                        <TextInput keyboardType='numeric' style={styles.TextInput} placeholder='788 123 456' /> 
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('VerifyPhone')} style={styles.Button}>
                        <Text>Send</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight
    },
    HeaderView: {
        height: 55,
        backgroundColor: 'white',
        paddingLeft: 15,
        justifyContent: 'center'
    },
    BackButton: {
        height: 50,
        justifyContent: 'center',
        width: 50,
    },
    BodyView: {
        padding: 15,
        alignItems: 'center',
    },
    HeaderText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5
    },
    SubText: {
        textAlign: 'center',
        width: WIDTH * .8
    },
    InputView: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: bright_green,
        flexDirection: 'row',
        width: WIDTH *.8,
        height: 45,
        marginTop: 10,
        borderRadius: WIDTH *.4,
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    TextInput: {
        flex: 1,
        marginLeft: 5,
    },
    Button: {
        backgroundColor: theme_green,
        height: 45,
        width: WIDTH *.8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: WIDTH * .3
    }
})
export default MoreInfo
