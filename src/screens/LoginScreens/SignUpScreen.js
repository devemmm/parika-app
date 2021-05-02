import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Modal, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { bright_green, HEIGHT, theme_green, WIDTH } from '../../constants/constants';
import { vehicleTypes } from '../../data/vehicleTypes';


export class SignUpScreen extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            f_name: '',
            l_name: '',
            password: '',
            c_password: '',
            icEye: 'eye-off',
            showPassword: true,
            showError: false, 
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
        this.setState(newState)
    };

    handlePassword = (password) => {
        let newState = {
            icEye: this.state.icEye,
            showPassword: this.state.showPassword,
            password: password
        }
        this.setState(newState);
    };

    handleConfirmPassword = (c_password) => {
        let newState = {
            icEye: this.state.icEye,
            showPassword: this.state.showPassword,
            c_password: c_password
        }
        this.setState(newState);
    };

    handleContinue = () => {
        if (this.state.f_name == '' || this.state.l_name == '' || this.state.password == '' || this.state.c_password == '') {
            this.setState({showError: true});
            this.setState({f_name: ''});
            this.setState({l_name: ''});
            this.setState({password: ''});
            this.setState({c_password: ''});
            setTimeout(() => {
                this.setState({showError: false});
            }, 5000);
        } else {
            this.props.navigation.navigate('SignUpScreenNext');
        }
    }
    
    render() {
        const { modalVisible } = this.state;
        return (
        <View style={styles.Container} >
          <View style={styles.HeaderView} >
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackButton} >
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.BodyView}>
                    <Text style={styles.HeaderText} >Create an account</Text>
                    <View style={styles.InputView} >
                        <View style={styles.TextInput}>
                            <Feather name="user" size={18} color="black" style={{ marginRight: 10 }} />
                            <TextInput 
                            value={this.state.f_name}
                            onChangeText={f_name => this.setState({f_name})}
                            style={styles.TextField} 
                            placeholder='First Name' />
                        </View>
                        <View style={styles.TextInput}>
                            <Feather name="user" size={18} color="black" style={{ marginRight: 10 }} />
                            <TextInput 
                            value={this.state.l_name}
                            onChangeText={l_name => this.setState({l_name})}
                            style={styles.TextField} 
                            placeholder='Last Name' />
                        </View>
                        <View style={styles.TextInput}>
                            <Feather name="lock" size={18} color="black" style={{ marginRight: 10 }} />
                            <TextInput 
                            style={styles.TextField}
                            value={this.state.password}
                            onChangeText={this.handlePassword}
                            secureTextEntry={this.state.showPassword}
                            keyboardType="default" 
                            placeholder='Password' />
                            <TouchableOpacity style={styles.eyeButton} onPress={this.changePwdType} >
                                <Feather name={this.state.icEye} size={20} color="grey" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.TextInput}>
                            <Feather name="lock" size={18} color="black" style={{ marginRight: 10 }} />
                            <TextInput 
                            style={styles.TextField}
                            value={this.state.c_password}
                            onChangeText={this.handleConfirmPassword}
                            secureTextEntry={this.state.showPassword}
                            keyboardType="default" 
                            placeholder='Confirm Password' />
                            <TouchableOpacity style={styles.eyeButton} onPress={this.changePwdType} >
                                <Feather name={this.state.icEye} size={20} color="grey" />
                            </TouchableOpacity>
                        </View>
                        { this.state.showError && <Text style={{ color: 'red', marginTop: 5, width: WIDTH *.8, textAlign: 'center', fontSize: 12 }}>Looks like some input fields are empty. Please complete.</Text> }
                    </View>
                    <TouchableOpacity onPress={() => this.handleContinue()} style={styles.Button}>
                        <Text>Continue</Text>
                    </TouchableOpacity>
                    <View style={styles.Footer} >
                        <TouchableOpacity>
                            <Text style={styles.ForgotText} >By clicking sign up you agree to the following <Text style={styles.SignUpGreen} >Terms and conditions</Text> without exception.</Text>
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
    eyeButton: {
        height: 45,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center'
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
        marginTop: 20,
        width: WIDTH *.8
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
export default SignUpScreen
