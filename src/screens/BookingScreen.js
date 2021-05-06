import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, StatusBar, Image, Modal } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { theme_green, WIDTH, HEIGHT, bright_green } from '../constants/constants';
import { api } from '../data/api';

export class BookingScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             modalVisible: false,
             timeModal: false,
        }
    }
    
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
                </View>
                <View style={styles.HeaderSubView}/>
            </View>
            <Modal
          statusBarTranslucent={true}
          animationType="none"
          transparent={true}
          visible={this.state.modalVisible}>
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
                <TouchableOpacity onPress={()=> this.setState({modalVisible: false})} style={styles.VehicleView}>
                    <Text>Hilx 3020 PR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.setState({modalVisible: false})} style={styles.VehicleView}>
                    <Text>Toyota PR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.setState({modalVisible: false})} style={styles.VehicleView}>
                    <Text>Audi3020</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
            </Modal>
            <Modal
          statusBarTranslucent={true}
          animationType="none"
          transparent={true}
          visible={this.state.timeModal}>
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
              <View style={styles.TimeModalView}>
                <Text>Work In Progress...</Text>
                <TouchableOpacity 
                onPress={() => this.setState({timeModal: false})}
                style={{
                    backgroundColor: theme_green,
                    height: 40,
                    width: WIDTH *.7,
                    borderRadius:  WIDTH *.25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 15
                }}>
                    <Text>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
            </Modal>
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
                        <View style={styles.TimeFlex}>
                            <TouchableOpacity onPress={() => this.setState({timeModal: true})}>
                                <Text style={styles.TimeDate}>Thu, May 6, 2021</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({timeModal: true})}>
                                <Text style={styles.TimeHour}>10:00 PM</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.TimeFlex, { marginTop: 15 }]}>
                            <TouchableOpacity onPress={() => this.setState({timeModal: true})}>
                                <Text style={styles.TimeDate}>Thu, May 6, 2021</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({timeModal: true})}>
                                <Text style={styles.TimeHour}>02:00 AM</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.VehicleDetailsView}>
                    <View style={styles.VehicleDetailsFlex}>
                        <Text style={styles.VehicleDetailsHeader}>Vehicle</Text>
                        <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                            <Text style={{ color: '#51afed', fontWeight: 'bold' }}>Change Vehicle</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 5, paddingBottom: 15, borderBottomColor: '#dcddde', borderBottomWidth: 1 }}>
                        <View style={styles.VehicleDetailsFlex}>
                            <Text>Name</Text>
                            <Text style={{ color: 'grey' }}>Hilux 45T</Text>
                        </View>
                        <View style={styles.VehicleDetailsFlex}>
                            <Text>Plate Number</Text>
                            <Text style={{ color: 'grey' }}>RAD 345F</Text>
                        </View>
                        <View style={styles.VehicleDetailsFlex}>
                            <Text>Driver's Info</Text>
                            <Text style={{ color: 'grey', width: WIDTH *.46 }} numberOfLines={1} >Hakizimana Ja Korode</Text>
                        </View>
                    </View>
                    <View style={styles.MoreInfoView}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Price</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17 }} >220 FRW</Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.BookNowButton}>
                <Text>Proceed To Payment</Text>
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
  ModalBG: {
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: 'black',
    opacity: 0.7,
  },
  ModalView: {
    width: WIDTH * 0.85,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingRight: 10,
    paddingLeft: 10
  },
  TimeModalView: {
     width: WIDTH * 0.85,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  VehicleView: {
      height: 50,
      justifyContent: 'center',
      padding: 5,
      borderBottomColor: bright_green,
      borderBottomWidth: 1
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
        marginTop: 25,
        borderColor: '#cacdcf',
        borderRadius: 10,
        borderWidth: 1,
        padding: 15
    },
    TimeFlex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TimeDate: {
        fontSize: 16
    },
    TimeHour: {
        fontSize: 16
    },
    VehicleDetailsView: {
        marginTop: 30,
        paddingBottom: 10,
    },
    VehicleDetailsFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 13
    },
    VehicleDetailsHeader: {
        fontWeight: 'bold', 
        fontSize: 17,
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
        height: 50
    },
    BookNowButton: {
        margin: 15,
        backgroundColor: theme_green,
        height: 45,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    BookNowButtonText: {
        fontSize: 17,
    }
})
export default BookingScreen
