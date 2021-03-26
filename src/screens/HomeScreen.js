import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image, ImageBackground, StatusBar, Modal } from 'react-native'
import { Feather, Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { HEIGHT, theme_green, theme_grey, WIDTH } from '../constants/constants';
import { api } from '../data/api';

export class HomeScreen extends Component {
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
        <ImageBackground style={styles.Container} source={ require('../../assets/images/map.png') } >
            <View style={styles.HeaderView}>
                <Text style={styles.HeaderText}>Hey, where do you want to park?</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchScreen')} style={styles.HeaderSearch}>
                    <Feather name="search" size={20} color="black" />
                    <Text style={styles.SearchInput}>Try 'Kigali City Tower'</Text>
                </TouchableOpacity>
            </View>
            <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            >
                <View style={styles.Modal} >
                    <Text style={styles.NearestHeaderTitle}>Nearest Parking</Text>
                    <View style={styles.NearbyParkingViewMore} >
                        <FlatList
                        data={api}
                        keyExtractor={item => `${item.id}`}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => {
                            return (
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailScreen')} style={styles.ParkingCard}>
                                    <View style={{ marginRight: 10 }} >
                                        <Image style={styles.ParkingImage} source={{ uri: item.url }} />
                                        <Text style={styles.ParkingStatus}>{item.status}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.ParkingName}>{item.name}</Text>
                                        <View style={styles.flexRow}>
                                            <MaterialIcons name="star" size={17} color="black" />
                                            <Text style={styles.ParkingRating}>{item.rating}</Text>
                                            <Text style={styles.ParkingLocation}>{item.location}</Text>
                                        </View>
                                        <View style={[styles.flexRow, { marginTop: 10 }]}>
                                            <View style={styles.flexRow}>
                                                <FontAwesome5 name="car" size={18} color="black" />
                                                <Text style={styles.ParkingDistance}>{item.distance} m</Text>
                                            </View>
                                            <View style={styles.flexRow}>
                                                <Ionicons name="bookmark" size={18} color="black" />
                                                <Text style={styles.ParkingPrice}>Rwf {item.price}/h</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        />
                    </View>
                    <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)} style={styles.CloseModalButton}>
                        <Feather name="x" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={styles.NearestView}>
                <View style={styles.NearestHeader}>
                    <Text style={styles.NearestHeaderTitle}>Nearest Parking</Text>
                    <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)}  style={styles.MoreNearestButton}>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailScreen')} style={styles.ParkingCard}>
                        <View style={{ marginRight: 10 }} >
                            <Image style={styles.ParkingImage} source={{ uri: api[0].url }} />
                            <Text style={styles.ParkingStatus}>{api[1].status}</Text>
                        </View>
                        <View>
                            <Text style={styles.ParkingName}>{api[0].name}</Text>
                            <View style={styles.flexRow}>
                                <MaterialIcons name="star" size={17} color="black" />
                                <Text style={styles.ParkingRating}>{api[0].rating}</Text>
                                <Text style={styles.ParkingLocation}>{api[0].location}</Text>
                            </View>
                            <View style={[styles.flexRow, { marginTop: 10 }]}>
                                <View style={styles.flexRow}>
                                    <FontAwesome5 name="car" size={18} color="black" />
                                    <Text style={styles.ParkingDistance}>{api[0].distance} m</Text>
                                </View>
                                <View style={styles.flexRow}>
                                    <Ionicons name="bookmark" size={18} color="black" />
                                    <Text style={styles.ParkingPrice}>Rwf {api[0].price}/h</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* duplicate of parking card */}

                    <TouchableOpacity 
                        style={styles.ParkingCard}>
                        <View style={{ marginRight: 10 }} >
                            <Image style={styles.ParkingImage} source={{ uri: api[1].url }} />
                            <Text style={styles.ParkingStatus}>{api[1].status}</Text>
                        </View>
                        <View>
                            <Text style={styles.ParkingName}>{api[1].name}</Text>
                            <View style={styles.flexRow}>
                                <MaterialIcons name="star" size={17} color="black" />
                                <Text style={styles.ParkingRating}>{api[1].rating.toFixed(1)}</Text>
                                <Text style={styles.ParkingLocation}>{api[1].location}</Text>
                            </View>
                            <View style={[styles.flexRow, { marginTop: 10 }]}>
                                <View style={styles.flexRow}>
                                    <FontAwesome5 name="car" size={18} color="black" />
                                    <Text style={styles.ParkingDistance}>{api[1].distance} m</Text>
                                </View>
                                <View style={styles.flexRow}>
                                    <Ionicons name="bookmark" size={18} color="black" />
                                    <Text style={styles.ParkingPrice}>Rwf {api[1].price}/h</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        resizeMode: 'contain'
    },
    HeaderView: {
        backgroundColor: theme_green,
        paddingTop: StatusBar.currentHeight + 30,
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    HeaderText: {
        fontSize: 22,
        fontWeight: 'bold',
        maxWidth: WIDTH *.5
    },
    HeaderSearch: {
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        backgroundColor: theme_grey,
        height: 50,
        alignItems: 'center',
        borderRadius: 30,
        paddingLeft: 15,
        marginTop: 20,
        marginBottom: -15,
        elevation: 10
    },
    SearchInput: {
        marginRight: 20,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'grey'
    },
    Modal: {
        justifyContent: "center",
        flex: 1,
        backgroundColor: theme_green,
        alignItems: "center",
    },
    NearbyParkingViewMore: {
        backgroundColor: 'white',
        height: HEIGHT *.75,
        width: WIDTH *.9,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 15,
        padding: 7
    },
    CloseModalButton: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    NearestView: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 15,
        left: 15,
        right: 15,
        borderRadius: 10,
        elevation: 3,
        padding: 10
    },
    NearestHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 7,
        marginBottom: 10,
        borderBottomColor: theme_grey,
        borderBottomWidth: 1
    },
    NearestHeaderTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    MoreNearestButton: {
        backgroundColor: 'transparent',
        padding: 5
    },
    ParkingCard: {
        flexDirection: 'row',
        marginBottom: 15
    },
    ParkingImage: {
        width: WIDTH *.23,
        height: WIDTH *.23,
        borderRadius: 7,
        resizeMode: 'cover',
    },
    ParkingStatus: {
        backgroundColor: theme_green,
        position: 'absolute',
        paddingLeft: 5,
        paddingRight: 5,
        color: 'white',
        borderRadius: 3,
        bottom: 0,
        textTransform: 'capitalize'
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ParkingName: {
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'capitalize',
        marginBottom: 3
    },
    ParkingRating: {
        marginRight: 10,
        marginLeft: 2
    },
    ParkingLocation: {
        textTransform: 'capitalize'
    },
    ParkingDistance: {
        marginRight: 15,
        marginLeft: 5
    },
    ParkingPrice: {
        marginLeft: 5
    }
})
export default HomeScreen
