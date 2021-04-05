import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, StatusBar } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { bright_green, theme_green, WIDTH } from '../../constants/constants';

export class WalletSettings extends Component {
    render() {
        return (
        <View style={styles.Container}>
            <View style={styles.HeaderView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackArrow}>
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.HeaderTextView}>
                    <Text style={styles.HeaderTitle} >My wallet</Text>
                </View>
                <View style={styles.BackArrow} />
            </View>
            <TouchableOpacity style={styles.BalanceView}>
                <View style={styles.flexDirection} >
                    <Text style={styles.SectionHeader}>My Balance</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('WalletRecharge')} >
                        <Text style={{ color: 'white', fontWeight: 'bold' }} >Recharge</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.BalanceText}>Rwf <Text style={styles.BalanceMoney} >23,431</Text></Text>
            </TouchableOpacity>
            <View style={{ marginRight: 15, marginLeft: 15 }}>
                <View style={[styles.flexDirection, { marginTop: 10, marginBottom: 5 }]} >
                    <Text style={styles.SectionHeader}>Payment Methods</Text>
                    <TouchableOpacity>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.PaymentCard} >
                    <Image source={{ uri: 'https://www.seekpng.com/png/full/69-691715_mtn-mm-logo-generic-mtn-mobile-money-logo.png' }} style={styles.PaymentImage} />
                    <View style={{ flex: 1 }}>
                        <Text>MTN Mobile Mobile</Text>
                        <Text>***189</Text>
                    </View>
                </View>
            </View>
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
        fontSize: 30,
        fontWeight: 'bold'
    },
    PaymentCard: {
        height: WIDTH *.2,
        backgroundColor: bright_green,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    PaymentImage: {
        height: WIDTH *.15,
        width: WIDTH *.25,
        resizeMode: 'contain',
        marginRight: 5
    }
})
export default WalletSettings
