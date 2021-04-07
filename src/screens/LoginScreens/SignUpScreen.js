import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Modal, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { bright_green, HEIGHT, theme_green, WIDTH } from '../../constants/constants';
import { vehicleTypes } from '../../data/vehicleTypes';


export class SignUpScreen extends Component {
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

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    
    render() {
        const { modalVisible } = this.state;
        return (
        <View style={styles.Container} >
            <Modal
            animationType="slide"
            transparent={true}
            statusBarTranslucent={true}
            visible={modalVisible}
            onRequestClose={() => {
                this.setModalVisible(!modalVisible);
            }}
            >
                <View style={styles.ModalBackground} />
                <View style={styles.ModalContainer}>
                    <View style={styles.ModalView}>
                        <FlatList
                        data={vehicleTypes}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => {
                            return (
                            <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)} style={styles.CarTypeButton}>
                                <Text style={styles.CarTypeButtonText}>{item.type}</Text>
                            </TouchableOpacity>
                            )
                        }}
                        />
                    </View>
                </View>
            </Modal>
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
                            <TextInput style={styles.TextField} placeholder='Full Names' />
                        </View>
                        <View style={styles.TextInput}>
                            <Feather name="phone" size={18} color="black" style={{ marginRight: 10 }} />
                            <TextInput style={styles.TextField} keyboardType="phone-pad" placeholder='Phone' />
                        </View>
                        <TouchableOpacity onPress={() => this.setModalVisible(!this.props.modalVisible)} style={styles.TextInput}>
                            <Feather name="disc" size={18} color="black" style={{ marginRight: 10 }} />
                            <Text>--choose--</Text>
                        </TouchableOpacity>
                        <View style={styles.TextInput}>
                            <Feather name="hash" size={18} color="black" style={{ marginRight: 10 }} />
                            <TextInput style={styles.TextField} keyboardType="default" placeholder='Plate Number' />
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
                        <View style={styles.TextInput}>
                            <Feather name="lock" size={18} color="black" style={{ marginRight: 10 }} />
                            <TextInput 
                            style={styles.TextField}
                            // value={this.state.password}
                            // onChangeText={this.handlePassword}
                            secureTextEntry={this.state.showPassword}
                            keyboardType="default" 
                            placeholder='Confirm Password' />
                            <TouchableOpacity style={styles.eyeButton} onPress={this.changePwdType} >
                                <Feather name={this.state.icEye} size={20} color="grey" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.Button}>
                        <Text>Sign up</Text>
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
    ModalBackground: {
        backgroundColor: 'black',
        flex: 1,
        opacity: .7
    },
    ModalContainer: {
        position: 'absolute',
        width: WIDTH,
        height: HEIGHT,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ModalView: {
        backgroundColor: 'white',
        width: WIDTH *.9,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'center',
    },
    CarTypeButton: {
        height: 40,
        justifyContent: 'center'
    },
    CarTypeButtonText: {
        textTransform: 'capitalize',
        fontSize: 16
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
