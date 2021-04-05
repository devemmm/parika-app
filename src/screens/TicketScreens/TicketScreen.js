import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, Modal } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { HEIGHT, theme_green, bright_green, WIDTH } from '../../constants/constants'
import { Feather } from '@expo/vector-icons';
import { api } from '../../data/api'

export class TicketScreen extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             modalVisible: false
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    
    render() {
        const { modalVisible } = this.state;
        return (
        <View style={styles.Container}>
            <Modal
            statusBarTranslucent={true}
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            >
            <View style={styles.ModalContainer}>
                <ScrollView>
                    <View style={styles.ModalHeader}>
                        <View style={{ flex: 1 }} />
                        <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)}>
                            <Feather name="x" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ModalTicketCard}>
                        <View style={styles.ModalHeaderCard}>
                            <Text style={{ color: 'grey' }}>Ticket ID: 2315435654</Text>
                        </View>
                        <View>
                            <View style={styles.FlexDirection} >
                                <Text>Parking Lot</Text>
                                <Text style={styles.BoldText}>Remera Parking</Text>
                            </View>
                            <View style={styles.FlexDirection} >
                                <Text>Space Name</Text>
                                <Text style={styles.BoldText}>SPCE G5 - 85</Text>
                            </View>
                            <View style={styles.FlexDirection}>
                                <Text>Price</Text>
                                <Text style={styles.BoldText}>Rwf 200</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.QrView}>
                        <Image style={styles.QrImage} source={{ uri: 'https://miro.medium.com/max/1400/1*sHmqYIYMV_C3TUhucHrT4w.png' }} />
                        <Text style={styles.ScanText}>Scan code to verify</Text>
                    </View>
                </ScrollView>
            </View>

            </Modal>
            <View style={styles.HeaderView}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollView}>
                <Text style={styles.HeaderTitle}>My Tickets</Text>
                <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)} style={styles.TicketCard}>
                    <View style={styles.TicketHeader}>
                        <View style={styles.TicketNameView}>
                            <Text style={styles.ParkingLotName}>spce g5 - 85</Text>
                            <Text style={styles.ParkingName}>{api[0].name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={[styles.ParkingTime, { marginRight: 25 }]} >
                                    <Feather name="calendar" size={16} color="grey" />
                                    <Text style={styles.ParkingTimeText}>Apr 4, 2021</Text>
                                </View>
                                <View style={styles.ParkingTime}>
                                    <Feather name="clock" size={16} color="grey" />
                                    <Text style={styles.ParkingTimeText}>12:00 - 02:00</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.Parkingprice}>Rwf {api[0].price}</Text>
                    </View>
                    <View style={styles.TicketFooter}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.ParkingTag}/>
                            <Text style={{ fontWeight: 'bold' }}>Waiting for payment</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ConfirmPassword')} >
                            <Feather name="trash-2" size={24} color="red" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <Text style={styles.SectionHeader}>History</Text>
                <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)} style={styles.TicketCard}>
                    <View style={styles.TicketHeader}>
                        <View style={styles.TicketNameView}>
                            <Text style={styles.ParkingLotName}>spce g5 - 85</Text>
                            <Text style={styles.ParkingName}>{api[0].name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={[styles.ParkingTime, { marginRight: 25 }]} >
                                    <Feather name="calendar" size={16} color="grey" />
                                    <Text style={styles.ParkingTimeText}>Apr 4, 2021</Text>
                                </View>
                                <View style={styles.ParkingTime}>
                                    <Feather name="clock" size={16} color="grey" />
                                    <Text style={styles.ParkingTimeText}>12:00 - 02:00</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.Parkingprice}>Rwf {api[0].price}</Text>
                    </View>
                    <View style={styles.TicketFooter}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.ParkingTag}/>
                            <Text style={{ fontWeight: 'bold' }}>Waiting for payment</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ConfirmPassword')} >
                            <Feather name="trash-2" size={24} color="red" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
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

    // modal styles

    ModalContainer: {
        flex: 1,
        backgroundColor: theme_green,
        paddingTop: StatusBar.currentHeight
    },
    ModalHeader: {
        flexDirection: 'row',
        marginRight: 15,
        marginTop: 5
    },
    ModalTicketCard: {
        backgroundColor: 'white',
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        marginTop: 10,
        padding: 15,
        borderRadius: 10
    },
    ModalHeaderCard: {
        borderBottomWidth: 1,
        borderBottomColor: bright_green,
        paddingBottom: 15,
        marginBottom: 10
    },
    FlexDirection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    BoldText: {
        fontWeight: 'bold'
    },
    QrView: {
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        padding: 40,
        borderRadius: 10,
        alignItems: 'center',
    },
    QrImage: {
        height: WIDTH *.7,
        width: WIDTH *.7
    },
    ScanText: {
        marginTop: 10,
        fontSize: 16,
        color: 'grey'
    },

    // end of modal style

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
        fontWeight: 'bold',
        marginBottom: 10
    },
    Parkingprice: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    ParkingTime: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ParkingTimeText: {
        color: 'grey',
        marginLeft: 5,
        fontWeight: 'bold',
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
