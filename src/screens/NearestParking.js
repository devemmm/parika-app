import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, StatusBar, Modal } from 'react-native'
import { Feather, Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { HEIGHT, theme_green, theme_grey, WIDTH } from '../constants/constants';
import { api } from '../data/api';

export class NearestParking extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            modalVisible: false,
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
            animationType="none"
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
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!modalVisible);
                        }} style={styles.SortOption}>
                            <Text>Price: Low to High</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!modalVisible);
                        }} style={styles.SortOption}>
                            <Text>Price: High to Low</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!modalVisible);
                        }} style={styles.SortOption}>
                            <Text>Lorem Ipsum</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!modalVisible);
                        }} style={styles.SortOption}>
                            <Text>Lorem Ipsum</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!modalVisible);
                        }} style={styles.SortOption}>
                            <Text>Lorem Ipsum</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!modalVisible);
                        }} style={styles.SortOption}>
                            <Text>Lorem Ipsum</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!modalVisible);
                        }} style={styles.SortOption}>
                            <Text>Lorem Ipsum</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.NearestHeader}>
                <View style={styles.NearestHeaderLeft}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.ArrowBack}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.NearestHeaderTitle}>Nearest Parking</Text>
                <TouchableOpacity onPress={() => {
                this.setModalVisible(!modalVisible);
            }}>
                    <Feather name="filter" size={22} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
            data={api}
            keyExtractor={item => `${item.id}`}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 10 }}
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
            <TouchableOpacity onPress={() => this.props.navigation.navigate("HomeScreen")} style={styles.ListViewButton}>
                <Feather name="map" size={24} color="white" />
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'white',
        flex: 1
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
        width: WIDTH *.85,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'center',
    },
    SortOption: {
        height: 48,
        borderBottomColor: theme_grey,
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    NearestHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between'
    },
    ArrowBack: {
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 7,
    },
    NearestHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    NearestHeaderTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
        marginRight: 10
    },
    ParkingCard: {
        flexDirection: 'row',
        marginBottom: 15,
        paddingRight: 15,
        paddingLeft: 15
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
    },
    ListViewButton: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme_green,
        elevation: 5
    }
})
export default NearestParking
