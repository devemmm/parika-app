import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, Modal, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { bright_green, HEIGHT, theme_green, WIDTH } from '../../constants/constants';
import { vehicleTypes } from '../../data/vehicleTypes';


export class PasswordReset extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            icEye: 'eye-off',
            password_o: '',
            password_n: '',
            showPassword: true,
            show_modal : false 
        }
    }
 
    changePwdType = () => {
        let newState;
        if (this.state.showPassword) {
            newState = {
                icEye: 'eye',
                showPassword: false,
                password_o: this.state.password_o
            }
        } else {
            newState = {
                icEye: 'eye-off',
                showPassword: true,
                password_o: this.state.password_o
            }
        }
        this.setState(newState)
    };

    handlePassword = (password_o) => {
        let newState = {
            icEye: this.state.icEye,
            showPassword: this.state.showPassword,
            password_o: password_o
        }
        this.setState(newState);
    };

    handleNewPassword = (password_n) => {
        let newState = {
            icEye: this.state.icEye,
            showPassword: this.state.showPassword,
            password_n: password_n
        }
        this.setState(newState);
    };

    
    handleCloseModal = () => {
        this.setState({ show_modal : false })
        this.props.navigation.navigate('SettingScreen')
    };
    
    render() {
        return (
        <View style={styles.Container} >
            <View style={styles.HeaderView} >
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackButton} >
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Modal
          statusBarTranslucent={true}
          animationType="none"
          transparent={true}
          visible={this.state.show_modal}>
          <View>
            <View style={styles.ModalBG} />
            <View
              style={{
                position: 'absolute',
                height: HEIGHT,
                width: WIDTH,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.ModalView}>
                <View style={styles.CkeckVector}>
                  <Feather name="check" size={40} color="white" />
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                      Your password was successfully changed!
                </Text>
                  <TouchableOpacity onPress={() => this.handleCloseModal()} style={[styles.AlertButtons, { backgroundColor: theme_green }]}>
                    <Text style={{ color: 'white' }}>Dismiss</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
            <ScrollView>
                <View style={styles.BodyView}>
                    <Text style={styles.HeaderText} >Reset password</Text>
                    <Text style={{ textAlign: 'center', marginTop: 5 }}>Make sure your new password is different from your old password</Text>
                    <View style={styles.InputView} >
                        <View style={styles.TextInput}>
                            <Feather name="lock" size={18} color="black" style={{ marginRight: 10 }} />
                            <TextInput 
                            style={styles.TextField}
                            value={this.state.password_o}
                            onChangeText={this.handlePassword}
                            secureTextEntry={this.state.showPassword}
                            keyboardType="default" 
                            placeholder='Old Password' />
                            <TouchableOpacity style={styles.eyeButton} onPress={this.changePwdType} >
                                <Feather name={this.state.icEye} size={20} color="grey" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.TextInput}>
                            <Feather name="lock" size={18} color="black" style={{ marginRight: 10 }} />
                            <TextInput 
                            style={styles.TextField}
                            value={this.state.password_n}
                            onChangeText={this.handleNewPassword}
                            secureTextEntry={this.state.showPassword}
                            keyboardType="default" 
                            placeholder='New Password' />
                            <TouchableOpacity style={styles.eyeButton} onPress={this.changePwdType} >
                                <Feather name={this.state.icEye} size={20} color="grey" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.setState({ show_modal: true })} style={styles.Button}>
                        <Text>Save Changes</Text>
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
    ModalBG: {
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: 'black',
    opacity: 0.7,
  },
  ModalView: {
    width: WIDTH * 0.85,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ModalButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WIDTH * .77,
    marginBottom: 10,
    marginTop: 15
  },
  AlertButtons: {
    height: 45,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH *.5,
    marginTop: 15,
    marginBottom: 10
  },
  CkeckVector: {
    backgroundColor: theme_green,
    height: WIDTH * 0.17,
    width: WIDTH * 0.17,
    borderRadius: WIDTH * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
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
export default PasswordReset
