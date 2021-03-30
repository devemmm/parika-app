import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image, ImageBackground, StatusBar, Modal, ScrollView } from 'react-native'
// import { Feather, Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { bright_green, HEIGHT, theme_green, WIDTH } from '../../constants/constants';

/*
 Pages to add:
 1.     Login Page
 2.     Sign Up Page
 3.     Add address page
 4.     Welcome pages and animations
 

 ==> settings page

 1.     Support center
 2.     Terms and conditions
 3.     Send feedback

*/

export class LoginScreen extends Component {
    render() {
        return (
        <View style={styles.Container} >
            <ScrollView>
                <Image style={styles.Image} source={{ uri: 'https://images.unsplash.com/photo-1524214786335-66456317bde6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHBhcmtpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }} />
                <View style={styles.BodyView}>
                    <Text style={styles.HeaderText} >Welcome back</Text>
                    <Text style={styles.SubText} >Login to your account</Text>
                    <View style={styles.InputView} >
                        <TextInput style={styles.TextInput} placeholder='Email' />
                        <TextInput style={styles.TextInput} placeholder='Password' />
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpScreen')} style={styles.Button}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.Footer} >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')} >
                            <Text style={styles.ForgotText} >Forgot your password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpScreen')} >
                            <Text style={styles.DontText} >Don't have an account? <Text style={styles.SignUpGreen} >Signup</Text> </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Image: {
        width: WIDTH,
        height: HEIGHT * .40
    },
    BodyView: {
        height: (HEIGHT * .6) + 25 ,
        padding: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: -25,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    HeaderText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    SubText: {
        color: 'grey'
    },
    InputView: {
        marginTop: 20,
        marginBottom: 20
    },
    TextInput: {
        width: WIDTH *.8,
        backgroundColor: bright_green,
        height: 45,
        marginTop: 10,
        borderRadius: WIDTH *.4,
        paddingLeft: 15
    },
    ForgotText: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    DontText: {
        color: 'grey',
        marginTop: 40
    },
    SignUpGreen: {
        color: theme_green,
        fontWeight: 'bold'
    },
    Footer: {
        marginTop: 20
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
export default LoginScreen
