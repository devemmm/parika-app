import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, ImageBackground, StatusBar } from 'react-native'
import { Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { api } from '../data/api';
import { HEIGHT, theme_green, theme_grey, WIDTH } from '../constants/constants';

function ParkingDetails({navigation}) {
    return (
    <View style={styles.Container}>
        <View>
            <Image style={styles.HeaderBackgroundImage} source={{ uri: api[0].url }} />
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.BackButton}>
                <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.ParkingBody}>
            <View style={styles.ParkingDetails}>
                <View>
                    <Text style={styles.ParkingLocation}>{api[0].location}</Text>
                    <Text style={styles.ParkingName}>{api[0].name}</Text>
                </View>
                <Text style={styles.RatingView}>{api[0].rating.toFixed(1)}</Text>
            </View>   
            <View style={styles.ParkingDistanceView}>
                <View style={styles.flexRow}>
                    <FontAwesome5 name="car" size={18} color="black" />
                    <Text style={styles.ParkingDistance}>{api[0].distance} m</Text>
                </View>
                <View style={styles.flexRow}>
                    <Ionicons name="bookmark" size={18} color="black" />
                    <Text style={styles.ParkingPrice}>Rwf {api[0].price}/hour</Text>
                </View>
            </View>  
            <View>
                <Text style={styles.SpaceAvailableTitle}>Space Available</Text>
                <View style={styles.SpaceAvailableView}>
                    <Text style={styles.SpaceAvailableText}>Today we have <Text style={styles.SpaceAvailableTextSpan}>231 parking lots</Text> available. Please don't forget to select before booking. </Text>
                </View>
                <View style={styles.ParkingLotView}>
                    <View style={styles.ParkingLotCard}>
                        <Text>P.L</Text>
                        <Text style={styles.ParkingLotId}>23/34</Text>
                    </View>
                    <View style={styles.ParkingLotCard}>
                        <Text>P.L</Text>
                        <Text style={styles.ParkingLotId}>23/34</Text>
                    </View>
                    <View style={styles.ParkingLotCard}>
                        <Text>P.L</Text>
                        <Text style={styles.ParkingLotId}>23/34</Text>
                    </View>
                    <View style={styles.ParkingLotCard}>
                        <Text>P.L</Text>
                        <Text style={styles.ParkingLotId}>23/34</Text>
                    </View>
                    <View style={styles.ParkingLotCard}>
                        <Text>P.L</Text>
                        <Text style={styles.ParkingLotId}>23/34</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.MoreDetailsHeader}>More Details</Text>
                    <Text><Text style={styles.BoldText}>Parking Address: </Text>Kigali City Tower </Text>
                    <Text><Text style={styles.BoldText}>Street Number: </Text>KK 234 ST, Kigali </Text>
                    <Text><Text style={styles.BoldText}>Open Hours: </Text>06:00 - 20:00 </Text>
                </View>
            </View>       
        </ScrollView>
        <TouchableOpacity style={styles.BookNowButton}>
            <Text style={styles.BookNowButtonText}>Book Now</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    HeaderBackgroundImage: {
        width: WIDTH,
        height: HEIGHT *.3,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    BackButton: {
        position: 'absolute',
        marginTop: StatusBar.currentHeight,
        backgroundColor: theme_green,
        margin: 15,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    ParkingBody: {
        paddingLeft: 15,
        paddingRight: 15
    },
    ParkingDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 15
    },
    ParkingLocation: {
        color: 'grey',
        textTransform: 'capitalize',
        fontSize: 16
    },
    ParkingName: {
        fontWeight: 'bold',
        fontSize: 22,
        textTransform: 'capitalize'
    },
    RatingView: {
        backgroundColor: theme_green,
        width: WIDTH *.10,
        height: 25,
        borderRadius: 3,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    ParkingDistanceView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 25,
        borderBottomColor: theme_green,
        borderBottomWidth: 1,
        marginBottom: 20

    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ParkingDistance: {
        marginRight: 20,
        marginLeft: 5
    },
    ParkingPrice: {
        marginLeft: 5
    },
    SpaceAvailableTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    SpaceAvailableView: {
        marginTop: 10,
        padding: 15,
        borderColor: theme_green,
        borderWidth: 2,
        borderRadius: 10
    },
    SpaceAvailableText: {
        fontSize: 16,
    },
    SpaceAvailableTextSpan: {
        fontWeight: 'bold'
    },
    ParkingLotView: {
        marginTop: 10,
        flexDirection: 'row'
    },
    ParkingLotCard: {
        height: WIDTH*.2,
        width: WIDTH *.2,
        borderRadius: 5,
        borderColor: '#cbced4',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    ParkingLotId: {
        fontWeight: 'bold',
        fontSize: 16
    },
    MoreDetailsHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20
    },
    BoldText: {
        fontWeight: 'bold'
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
export default ParkingDetails
