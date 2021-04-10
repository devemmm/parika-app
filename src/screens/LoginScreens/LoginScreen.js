import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image, ImageBackground, StatusBar, Modal, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { bright_green, HEIGHT, theme_green, WIDTH } from '../../constants/constants';

export class LoginScreen extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            modalVisible: false,
            icEye: 'eye-off', // default icon to show that password is currently hidden
            password: '', // actual value of password entered by the user
            showPassword: true // boolean to show/hide the password  
        }
    }
 
    changePwdType = () => {
        let newState;
        if (this.state.showPassword) {
            newState = {
                icEye: 'eye',
                showPassword: false,
                password: this.state.password
            }
        } else {
            newState = {
                icEye: 'eye-off',
                showPassword: true,
                password: this.state.password
            }
        }
        // set new state value
        this.setState(newState)
    };
    handlePassword = (password) => {
        let newState = {
            icEye: this.state.icEye,
            showPassword: this.state.showPassword,
            password: password
        }
        this.setState(newState);
        this.props.callback(password); // used to return the value of the password to the caller class, skip this if you are creating this view in the caller class itself
    };

    render() {
        return (
        <View style={styles.Container} >
            <ScrollView>
                <Image style={styles.Image} source={{ uri: 'https://images.unsplash.com/photo-1524214786335-66456317bde6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHBhcmtpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }} />
                <View style={styles.BodyView}>
                    <Text style={styles.HeaderText} >Welcome back</Text>
                    <Text style={styles.SubText} >Login to your account</Text>
                    <View style={styles.InputView} >
                        <View style={styles.TextInput}>
                            <Feather name="phone" size={18} color="black" style={{ marginRight: 10 }} />
                            <TextInput style={styles.TextField} keyboardType="phone-pad" placeholder='Phone' />
                        </View>
                        <View style={styles.TextInput}>
                            <Feather name="lock" size={18} color="black" style={{ marginRight: 10 }} />
                            <TextInput 
                            style={styles.TextField}
                            // value={this.state.password}
                            // onChangeText={this.handlePassword}
                            secureTextEntry={this.state.showPassword}
                            keyboardType="default" 
                            placeholder='Password' />
                            <TouchableOpacity style={styles.eyeButton} onPress={this.changePwdType} >
                                <Feather name={this.state.icEye} size={20} color="grey" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.Button}>
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
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    TextField: {
        flex: 1,
        marginRight: 10,
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