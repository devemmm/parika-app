import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { bright_green, HEIGHT, theme_green, WIDTH } from '../../constants/constants';

export class PasswordReset extends Component {
    render() {
        return (
        <View style={styles.Container}>
            <View style={styles.HeaderView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackArrow}>
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.HeaderTextView}>
                    <Text style={styles.HeaderTitle} >Reset Password</Text>
                </View>
                <View style={styles.BackArrow} />
            </View>
            <View style={styles.InputView}>
                <Text>Enter your email linked to your account and we will send you a <Text style={{ fontWeight: 'bold' }} >Verification code</Text> on your email which will hlp you reset your password </Text>
                <View style={styles.TextInputView}>
                    <TextInput style={styles.TextInput} placeholder='Email' />
                </View>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('PasswordNew')} style={styles.Button}>
                <Text>Send verification</Text>
            </TouchableOpacity>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'white'
    },
    HeaderView: {
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 15,
        paddingLeft: 15
    },
    BackArrow: {
        width: WIDTH *.15,
    },
    HeaderTextView: {
        flex: 1,
        alignItems: 'center'
    },
    HeaderTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    InputView: {
        margin: 15
    },
    TextInputView: {
        marginTop: 20
    },
    Label: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5
    },
    TextInput: {
        backgroundColor: bright_green,
        height: 45,
        marginTop: 10,
        borderRadius: WIDTH *.4,
        paddingLeft: 15
    },
    Button: {
        backgroundColor: theme_green,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginRight: 15,
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 5
    },
})
export default PasswordReset
