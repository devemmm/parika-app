import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, StatusBar, Image } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { theme_green, WIDTH } from '../constants/constants';
import { api } from '../data/api';

export class BookingScreen extends Component {
    render() {
        return (
        <View style={styles.Container}>
            <View style={styles.HeaderView}>
                <View style={styles.HeaderSubView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackButton}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.HeaderTitleView}>
                    <Text style={styles.HeaderTitle}>Booking</Text>
                    <Text style={styles.HeaderSubTitle}>Booking sub text</Text>
                </View>
                <View style={styles.HeaderSubView}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollView}>
                <View>
                    <Text style={styles.SectionHeader} >Destination</Text>
                    <View style={styles.DestinationView}>
                        <Image style={styles.DestinationImage} source={{ uri: api[0].url }} />
                        <View>
                            <Text style={styles.DestinationName} >{api[0].name}</Text>
                            <Text style={styles.DestinationParkingLot} >space: p5 - 64</Text>
                        </View>
                    </View>
                    <View style={styles.ParkingTime} >
                        <TouchableOpacity style={styles.TimeButton}>
                            <Text style={styles.TimeButtonTitle}>Arriving</Text>
                            <Text>Today</Text>
                            <Text>12:00PM</Text>
                        </TouchableOpacity>
                        <View style={styles.ParkingTimeMiddle}>
                            <Text style={styles.DurationTag}>2h 0m</Text>
                        </View>
                        <TouchableOpacity style={styles.TimeButton}>
                            <Text style={styles.TimeButtonTitle}>Leaving</Text>
                            <Text>Today</Text>
                            <Text>12:00PM</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.VehicleDetailsView}>
                    <View style={styles.VehicleDetailsFlex}>
                        <Text style={styles.VehicleDetailsHeader}>Vehicle</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfile')}>
                            <Text style={{ color: '#51afed', fontWeight: 'bold' }}>Change Vehicle Details</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 5, paddingBottom: 15, borderBottomColor: '#dcddde', borderBottomWidth: 1 }}>
                        <View style={styles.VehicleDetailsFlex}>
                            <Text style={styles.VehicleDetailsBold}>Type</Text>
                            <Text>Personal</Text>
                        </View>
                        <View style={styles.VehicleDetailsFlex}>
                            <Text style={styles.VehicleDetailsBold}>Plate Number</Text>
                            <Text>RAD 345F</Text>
                        </View>
                    </View>
                    <View style={styles.MoreInfoView}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Driver's Info</Text>
                        <Text >Hakizimana Ja Korode</Text>
                    </View>
                    <View style={styles.MoreInfoView}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Payment Method</Text>
                        <Text >MOMO</Text>
                    </View>
                    <View style={styles.MoreInfoView}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Price</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17 }} >Rwf 220</Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ConfirmPassword')} style={styles.BookNowButton}>
                <Text style={styles.BookNowButtonText}>Proceed To Payment</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        paddingTop: StatusBar.currentHeight,
        flex: 1,
    },
    HeaderView: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        height: 50,
        alignItems: 'center'
    },
    BackButton: {
        width: 40,
        height: 40,
        justifyContent: 'center'
    },
    HeaderSubView: {
        flex: .2,
    },
    HeaderTitleView: {
        flex: 1,
        alignItems: 'center'
    },
    HeaderTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    HeaderSubTitle: {
        fontSize: 13,
        textTransform: 'capitalize'
    },
    ScrollView: {
        paddingRight: 15,
        paddingLeft: 15
    },
    SectionHeader: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 10,
        marginBottom: 10
    },
    DestinationView: {
        flexDirection: 'row'
    },
    DestinationImage: {
        width: WIDTH *.20,
        height: WIDTH*.20,
        borderRadius: 5,
        resizeMode: 'cover',
        marginRight: 10
    },
    DestinationName: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 18
    },
    DestinationParkingLot: {
        textTransform: 'uppercase',
        color: theme_green,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    ParkingTime: {
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        borderColor: '#cacdcf',
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TimeButton: {
        width: WIDTH *.35,
        alignItems: 'center',
        height: 70,
        justifyContent: 'center'
    },
    ParkingTimeMiddle: {
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: theme_green,
        width: WIDTH *.18,
        height: 22,
        borderRadius: 40,
    },
    DurationTag: {
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 13
    },
    TimeButtonTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    VehicleDetailsView: {
        marginTop: 30,
        paddingBottom: 10,
        // borderBottomColor: '#cacdcf',
        // borderBottomWidth: 1
    },
    VehicleDetailsFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 13
    },
    VehicleDetailsHeader: {
        fontWeight: 'bold', 
        fontSize: 18,
    },
    VehicleDetailsBold: {
        fontWeight: 'bold'
    },
    DropDownButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    MoreInfoView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#dcddde',
        borderBottomWidth: 1,
        height: 50
    },
    BookNowButton: {
        marginRight: 15,
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: theme_green,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    BookNowButtonText: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})
export default BookingScreen
