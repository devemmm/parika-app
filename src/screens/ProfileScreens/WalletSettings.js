import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, StatusBar, Modal, ScrollView, TextInput } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { bright_green, theme_green, WIDTH, HEIGHT } from '../../constants/constants';

export class WalletSettings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            phone: '',
            amount: '',
            show_payment: false,
            button_error: false,
            show_modal: false
        }
    }

    handleShowPayment = () => {
        if (this.state.show_payment) {
            this.setState({ show_payment: false })
        } else {
            this.setState({ show_payment: true })
        }
    }

    handleConfirmPayment = () => {
        if (this.state.phone == '' || this.state.amount == '') {
            this.setState({ button_error: true })
            setTimeout(() => {
                this.setState({ button_error: false })
            }, 3000);
            this.setState({ phone : '' })
            this.setState({ amount : '' })
        } else {
            this.setState({ show_modal: true })
        }
    }

    handleCloseModal = () => {
        this.setState({ show_modal : false })
        this.setState({ phone : '' })
        this.setState({ amount : '' })
        this.setState({ show_payment : false })
    }
    
    render() {
        return (
        <View style={styles.Container}>
            <ScrollView>
            <View style={styles.HeaderView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackArrow}>
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.HeaderTextView}>
                    <Text style={styles.HeaderTitle} >My wallet</Text>
                </View>
                <View style={styles.BackArrow} />
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
                      Your payment was successfully made
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'grey',
                    textAlign: 'center',
                    marginTop: 5,
                  }}>
                  You have regarded FRW {this.state.amount} with +250{this.state.phone}
                </Text>
                  <TouchableOpacity onPress={() => this.handleCloseModal()} style={[styles.AlertButtons, { backgroundColor: theme_green }]}>
                    <Text style={{ color: 'white' }}>Dismiss</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
            <View style={styles.BalanceView}>
                <View style={styles.flexDirection} >
                    <Text style={styles.SectionHeader}>My Balance</Text>
                </View>
                <Text style={styles.BalanceText}>frw <Text style={styles.BalanceMoney} >23,431</Text></Text>
            </View>
            <View style={{ marginRight: 15, marginLeft: 15 }}>
                <View style={[styles.flexDirection, { marginTop: 10, marginBottom: 5 }]} >
                    <Text style={styles.SectionHeader}>Recharge with</Text>
                </View>
                <View style={styles.PaymentCard} >
                    <TouchableOpacity 
                    onPress={() => this.handleShowPayment()}
                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{ uri: 'https://www.seekpng.com/png/full/69-691715_mtn-mm-logo-generic-mtn-mobile-money-logo.png' }} style={styles.PaymentImage} />
                        <View style={{ flex: 1 }}>
                            <Text>MTN Mobile Mobile</Text>
                        </View>
                    </TouchableOpacity>
                    { this.state.show_payment && 
                    <View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ marginLeft: 10 }}>Enter phone number </Text>
                        <View 
                        style={{ 
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderRadius: 20,
                            padding: 5,
                            paddingLeft: 15,
                            marginTop: 7
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>+250 - </Text>
                            <TextInput
                            value={this.state.phone}
                            onChangeText={phone => this.setState({ phone: phone })}
                            keyboardType="numeric"
                            placeholder="780 000 000"
                            style={{
                                flex: 1,
                                marginRight: 10,
                                fontSize: 15,
                                marginLeft: 5
                            }}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ marginLeft: 10 }}>Enter amount</Text>
                        <View 
                        style={{ 
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderRadius: 20,
                            padding: 5,
                            paddingLeft: 15,
                            marginTop: 7
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>FRW - </Text>
                            <TextInput
                            vlaue={this.state.amount}
                            onChangeText={amount => this.setState({ amount: amount })}
                            keyboardType="numeric"
                            placeholder="5000"
                            style={{
                                flex: 1,
                                marginRight: 10,
                                fontSize: 15,
                                marginLeft: 5
                            }}
                            />
                        </View>
                        { this.state.button_error &&
                        <Text style={{ color: 'red', fontSize: 12,
                    marginTop: 5 }}>Please make sure you have provided the phone number and the amount</Text> }
                        <TouchableOpacity 
                        onPress={() => this.handleConfirmPayment()}
                        style={styles.PayButton}>
                            <Text>Confirm Payment</Text>
                        </TouchableOpacity>
                    </View>
                    </View> }
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
        width: WIDTH*.15,
    },ModalBG: {
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
    height: WIDTH * 0.2,
    width: WIDTH * 0.2,
    borderRadius: WIDTH * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
  },
    HeaderTextView: {
        flex: 1,
        alignItems: 'center'
    },
    HeaderTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    BalanceView: {
        backgroundColor: theme_green,
        margin: 15,
        padding: 10,
        borderRadius: 10
    },
    flexDirection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    SectionHeader: {
        fontWeight: 'bold',
        fontSize: 16
    },
    BalanceText: {
        color: 'white',
        fontSize: 18,
        marginTop: 10,
        textTransform: 'uppercase'
    },
    BalanceMoney: {
        fontSize: 27,
        fontWeight: 'bold'
    },
    PaymentCard: {
        backgroundColor: bright_green,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    },
    PaymentImage: {
        height: WIDTH *.15,
        width: WIDTH *.25,
        resizeMode: 'contain',
        marginRight: 5
    },
    PayButton: {
        backgroundColor: theme_green,
        height: 40,
        borderRadius: 25,
        marginTop: 15,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default WalletSettings
