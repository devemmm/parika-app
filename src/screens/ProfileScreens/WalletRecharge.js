import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, TextInput, Modal } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { bright_green, HEIGHT, theme_green, WIDTH } from '../../constants/constants';

export class WalletRecharge extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            modalVisible: false,
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    handleModalButton = () => {
        this.setModalVisible(!this.state.modalVisible);
        this.props.navigation.navigate('HomeScreen');
    }
    
    render() {
        const { modalVisible } = this.state;
        return (
        <View style={styles.Container}>
            {/* <Modal
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
                        <View style={styles.CkeckVector}>
                            <Feather name="check" size={65} color="white" />
                        </View>
                        <Text style={styles.ModalHeader}>Congratulation!!</Text>
                        <Text style={styles.ModalText}>Successful!</Text>
                        <TouchableOpacity onPress={this.handleModalButton} style={styles.ModalButton}>
                            <Text>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal> */}

            <View style={styles.HeaderView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackArrow}>
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.HeaderTextView}>
                    <Text style={styles.HeaderTitle} >Confirm Password</Text>
                </View>
                <View style={styles.BackArrow} />
            </View>
            <TouchableOpacity style={styles.PaymentCard} >
                <Image source={{ uri: 'https://www.seekpng.com/png/full/69-691715_mtn-mm-logo-generic-mtn-mobile-money-logo.png' }} style={styles.PaymentImage} />
                <View>
                    <Text>MTN Mobile Mobile</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.InputView}>
                    <Text style={{ fontSize: 16, marginBottom: 15 }}>Please enter the amount you want to recharge</Text>
                    <View style={styles.TextInput} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginRight: 10 }} >RWF - </Text>
                        <TextInput 
                        style={{ fontSize: 18, flex: 1 }} 
                        keyboardType='numeric'
                        placeholder="1000" />
                    </View>
                    <View style={styles.TextInput} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginRight: 10 }} >250 - </Text>
                        <TextInput 
                        style={{ fontSize: 18, flex: 1 }} 
                        keyboardType='numeric'
                        placeholder="789098890" />
                    </View>
            </View>
            <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)} style={styles.Button}>
                <Text>Confirm Payment</Text>
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
        alignItems: 'center'
    },
    CkeckVector: {
        backgroundColor: theme_green,
        height: WIDTH *.2,
        width: WIDTH *.2,
        borderRadius: WIDTH *.1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        elevation: 2
    },
    ModalHeader: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    ModalText: {
        textAlign: 'center'
    },
    ModalButton: {
        backgroundColor: theme_green,
        height: 45,
        borderRadius: 50,
        width: WIDTH * .5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
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
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15
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
        borderRadius: WIDTH *.4,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    PasswordGuideline: {
        color: theme_green,
        fontSize: 12,
        marginTop: 5
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
    PaymentCard: {
        height: WIDTH *.2,
        backgroundColor: bright_green,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15
    },
    PaymentImage: {
        height: WIDTH *.15,
        width: WIDTH *.25,
        resizeMode: 'contain',
        marginRight: 5
    }
})
export default WalletRecharge
