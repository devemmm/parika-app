import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { HEIGHT, theme_green } from '../constants/constants'
import { Feather } from '@expo/vector-icons';
import { api } from '../data/api'

export class TicketScreen extends Component {
    render() {
        return (
        <View style={styles.Container}>
            <View style={styles.HeaderView}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollView}>
                <Text style={styles.HeaderTitle}>My Tickets</Text>
                <View style={styles.TicketCard}>
                    <View style={styles.TicketHeader}>
                        <View style={styles.TicketNameView}>
                            <Text style={styles.ParkingLotName}>spce g5 - 85</Text>
                            <Text style={styles.ParkingName}>{api[0].name}</Text>
                        </View>
                        <Text style={styles.Parkingprice}>Rwf {api[0].price}</Text>
                    </View>
                    <View style={styles.TicketFooter}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.ParkingTag}/>
                            <Text style={{ fontWeight: 'bold' }}>Waiting for payment</Text>
                        </View>
                        <TouchableOpacity style={styles.MoreButton}>
                            <Feather name="more-vertical" size={22} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.SectionHeader}>History</Text>
                <View style={styles.TicketCard}>
                    <View style={styles.TicketHeader}>
                        <View style={styles.TicketNameView}>
                            <Text style={styles.ParkingLotName}>spce g5 - 85</Text>
                            <Text style={styles.ParkingName}>{api[0].name}</Text>
                        </View>
                        <Text style={styles.Parkingprice}>Rwf {api[0].price}</Text>
                    </View>
                    <View style={styles.TicketFooter}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.ParkingTag}/>
                            <Text style={{ fontWeight: 'bold' }}>Waiting for payment</Text>
                        </View>
                        <TouchableOpacity style={styles.MoreButton}>
                            <Feather name="more-vertical" size={22} color="black" />
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
    HeaderView: {
        backgroundColor: theme_green,
        paddingTop: StatusBar.currentHeight,
        height: HEIGHT *.25,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    ScrollView: {
        position: 'absolute',
        paddingTop: StatusBar.currentHeight,
        paddingRight: 15,
        paddingLeft: 15,
        right: 0,
        left: 0
    },
    HeaderTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 15,
        marginBottom: 20
    },
    TicketCard: {
        backgroundColor: 'white',
        elevation: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    TicketHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10,
        borderBottomColor: '#dcddde',
        borderBottomWidth: 1
    },
    TicketNameView: {
        flex: 1
    },
    ParkingLotName: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: theme_green
    },
    ParkingName: {
        fontSize: 17,
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    Parkingprice: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    TicketFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 5
    },
    ParkingTag: {
        height: 20,
        width: 20,
        backgroundColor: theme_green,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10
    },
    SectionHeader: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 15
    }
})
export default TicketScreen
